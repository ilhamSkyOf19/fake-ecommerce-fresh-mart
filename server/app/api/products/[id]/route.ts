import { ProductService } from "@/services/product.service";
import { NextRequest, NextResponse } from "next/server";
import { success } from "zod";


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
                {
                    success: true,
                    status: 200,
                    message: "Product deleted successfully",
                }, { status: 200 });
        } else {
            return NextResponse.json(
                { success: false, errors: response.message },
                { status: 404 }
            )
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { errors: 'Internal Server Error' },
            { status: 500 }
        );
    }

}