import type { ProductResponse } from "../model/product-model";
import { ProductService } from "../services/product.service";

export const fetchGetProductsByCategory = async (category: string): Promise<ProductResponse[] | null> => {
    try {
        const result = await ProductService.getByCategory(category);
        return result;
    } catch (error) {
        return null;
    }
}
