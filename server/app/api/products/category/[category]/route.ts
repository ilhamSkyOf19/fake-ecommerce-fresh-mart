import { NextRequest, NextResponse } from 'next/server'
import { ProductService } from '@/services/product.service'

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ category: string }> },
) {
    const { category } = await context.params;

    try {
        const response = await ProductService.getCategory(category)

        // cek response
        if (!response.success) {
            return NextResponse.json({ messege: response.errors }, { status: 400 })
        }

        return NextResponse.json({
            success: true,
            status: 201,
            message: "User created successfully",
            data: response.data
        }, { status: 201 });


    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
