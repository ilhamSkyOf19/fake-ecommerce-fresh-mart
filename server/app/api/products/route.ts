import { ProductRequest, ProductResponse } from "@/models/product-model";
import { ProductService } from "@/services/product.service";
import { ProductValidation } from "@/validation/product-validation";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {

        const body: ProductRequest = await req.json();
        // check validation
        const validationResult = ProductValidation.CREATE.parse(body);


        // Simpan ke database
        const createdProduct = await ProductService.create(validationResult);

        return NextResponse.json(
            { message: 'Product created successfully', product: createdProduct },
            { status: 201 }
        )

    } catch (error) {

        if (error instanceof ZodError) {
            const messages = error.issues.map(err => err.message);

            return NextResponse.json({
                errors: messages[0]
            }, { status: 400 });
        } else {
            return NextResponse.json({
                error: 'Internal Server Error'
            }, { status: 500 });
        }
    }
}