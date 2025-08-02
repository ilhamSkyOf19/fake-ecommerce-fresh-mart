import { ProductRequest } from "@/models/product-model";
import { ProductService } from "@/services/product.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {

        const body: ProductRequest = await req.json();


        // Simpan ke database
        const response = await ProductService.create(body);


        // Cek error
        if (!response.success) {
            return NextResponse.json(
                { messege: response.errors },
                { status: 400 });
        }

        return NextResponse.json(
            {
                success: true,
                status: 201,
                message: "User created successfully",
                data: response.data
            }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            error: 'Internal Server Error'
        }, { status: 500 });
    }
}
