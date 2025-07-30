import { ProductRequest } from "@/models/product-model";
import { ProductService } from "@/services/product.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {

        const body: ProductRequest = await req.json();


        // Simpan ke database
        const createdProduct = await ProductService.create(body);

        if (createdProduct && 'errors' in createdProduct) {
            return NextResponse.json(
                { errors: createdProduct.errors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: 'Product created successfully', product: createdProduct },
            { status: 201 }
        )

    } catch (error) {
        return NextResponse.json({
            error: 'Internal Server Error'
        }, { status: 500 });
    }
}
