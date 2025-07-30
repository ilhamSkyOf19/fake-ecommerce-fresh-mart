import { ProductRequest } from "@/models/product-model";
import { z, ZodType } from "zod";

export class ProductValidation {

    // create 
    static readonly CREATE: ZodType<ProductRequest> = z.object({
        title: z.string(),
        category: z.string(),
        price: z.number(),
        favorite: z.boolean(),
        img: z.string(),
        stock: z.number()
    })

    // delete 
    static readonly DELETE: ZodType<{ id: string }> = z.object({
        id: z.string()
    })

}