import { prisma } from "@/applications/prismaClient";
import { ProductRequest, ProductResponse, toProductsResponse } from "@/models/product-model";
import { ServiceResult } from "@/types/service-type";
import { ProductValidation } from "@/validation/product-validation";
import { Prisma } from "generated/prisma";
import { ZodError } from "zod";

export class ProductService {


    // create 
    static async create(product: ProductRequest): Promise<ServiceResult<ProductResponse>> {
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
            return { success: true, data: toProductsResponse(result) };
        } catch (error) {
            if (error instanceof ZodError) {
                // Tangkap error per field
                return {
                    success: false,
                    errors: error.issues.map(err => ({
                        err: err.path.join('.'),
                        message: err.message
                    }))
                }
            }

            console.log(error);
            return { success: false, errors: [{ err: "server", message: "Failed to create product" }] };
        }
    }

    // get all
    static async getAll(): Promise<ServiceResult<ProductResponse[]>> {
        try {
            const result = await prisma.products.findMany()
            return { success: true, data: result.map(toProductsResponse) };
        } catch (error) {
            console.log(error);
            return { success: false, errors: [{ err: "server", message: "Failed to fetch products" }] };
        }
    }

    // get category
    static async getCategory(category: string): Promise<ServiceResult<ProductResponse[]>> {
        try {
            // cek category
            category = ProductValidation.GET_CATEGORY.parse({ category }).category;

            const result = await prisma.products.findMany({
                where: {
                    category: category
                },
                take: 5
            })
            return { success: true, data: result.map(toProductsResponse) };
        } catch (error) {
            console.log(error)
            return { success: false, errors: [{ err: "server", message: "Failed to fetch products" }] };
        }
    }


    // delete products 
    static async delete(id: string): Promise<{ success: boolean; message?: string }> {
        try {
            const parsed = ProductValidation.DELETE.parse({ id });

            await prisma.products.delete({
                where: { id: parsed.id }
            });

            return { success: true, message: "Product deleted successfully" };

        } catch (error) {
            console.error("Error deleting news:", error);
            // error zod
            if (error instanceof ZodError) {
                return { success: false, message: "Invalid ID" };
            }
            // id not found
            return { success: false, message: "product not found" };
        }
    }


}