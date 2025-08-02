import { ProductService } from "@/services/product.service";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ id: string }> },
) {
    // get params 
    const { id } = await context.params;

    // delete product
    try {
        const response = await ProductService.delete(id);

        if (response.success) {
            return NextResponse.json(
                { message: response.message },
                { status: 200 }
            )
        } else {
            return NextResponse.json(
                { message: response.message },
                { status: 404 }
            )
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }

}