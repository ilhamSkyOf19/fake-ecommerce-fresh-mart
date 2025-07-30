

export type ProductResponse = {
    id: string;
    category: string;
    title: string;
    price: number;
    favorite: boolean;
    img: string;
    netWeight: number;
    stock: number;
}


// to response 
export const toProductResponse = (data: ProductResponse): ProductResponse => {
    return {
        id: data.id,
        category: data.category,
        title: data.title,
        price: data.price,
        favorite: data.favorite,
        img: data.img,
        netWeight: data.netWeight,
        stock: data.stock
    }
}