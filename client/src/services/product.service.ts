import API from "../lib/api";
import { toProductResponse, type ProductResponse } from "../model/product-model";





export class ProductService {
    // get all
    static async getByCategory(category: string): Promise<ProductResponse[] | null> {
        try {
            const result = await API.get(`/products/category/${category}`);
            return result.data.map(toProductResponse);
        } catch (error) {
            throw new Error('Failed to fetch products by category');
        }
    }
}