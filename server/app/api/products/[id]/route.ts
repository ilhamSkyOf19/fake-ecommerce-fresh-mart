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
        const result = await ProductService.delete(id);

        if (result.success) {
            return NextResponse.json(
                { message: 'Product deleted successfully' },
                { status: 200 }
            )
        } else {
            return NextResponse.json(
                { error: 'Product not found' },
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