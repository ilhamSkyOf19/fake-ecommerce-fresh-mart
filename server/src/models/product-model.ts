import { Products } from "generated/prisma"


// product req
export type ProductRequest = {
    category: string;
    title: string;
    price: number;
    favorite: boolean;
    img: string;
    stock: number
}


// product res
export type ProductResponse = {
    id: string;
    category: string;
    title: string;
    price: number;
    favorite: boolean;
    img: string;
    stock: number
}

// to response 
export const toProductsResponse = (product: Products): ProductResponse => {
    return {
        id: product.id ?? '',
        category: product.category ?? '',
        title: product.title ?? '',
        price: product.price ?? 0,
        favorite: product.favorite ?? false,
        img: product.img ?? '',
        stock: product.stock ?? 0
    }
}