import { prisma } from "@/applications/prismaClient";
import { ProductRequest, ProductResponse, toProductsResponse } from "@/models/product-model";
import { ProductValidation } from "@/validation/product-validation";
import { ZodError } from "zod";

export class ProductService {


    // create 
    static async create(product: ProductRequest): Promise<ProductResponse | null | { errors: { path: string, message: string }[] }> {
        try {
            product = ProductValidation.CREATE.parse(product);

            const result = await prisma.products.create({
                data: {
                    category: product.category,
                    title: product.title,
                    price: product.price,
                    favorite: product.favorite,
                    img: product.img,
                    stock: product.stock
                }
            });
            return toProductsResponse(result);
        } catch (error) {
            if (error instanceof ZodError) {
                // Tangkap error per field
                const errors = error.issues.map(err => ({
                    path: err.path.join('.'),
                    message: err.message
                }));
                return { errors };
            }
            console.log(error);
            return null;
        }
    }

    // get all
    static async getAll(): Promise<ProductResponse[]> {
        try {
            const result = await prisma.products.findMany()
            return result.map(toProductsResponse);
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // get category
    static async getCategory(category: string): Promise<ProductResponse[]> {
        try {
            // cek category
            category = ProductValidation.GET_CATEGORY.parse({ category }).category;

            const result = await prisma.products.findMany({
                where: {
                    category: category
                },
                take: 5
            })
            return result.map(toProductsResponse);
        } catch (error) {
            console.log(error)
            return []
        }
    }


    // delete products 
    static async delete(id: string): Promise<{ success: boolean }> {
        // cek id
        if (!id) {
            return { success: false };
        }
        // delete
        try {
            id = ProductValidation.DELETE.parse({ id }).id;
            const result = await prisma.products.delete({
                where: {
                    id: id
                }
            })
            // if result is null or undefined, return false
            if (!result) {
                return { success: false };
            }

            return { success: true };
        } catch (error) {
            console.log(error);
            return { success: false };
        }

    }

}