import { NewsRequest, NewsResponse, toNewsResponse } from "@/models/news-model";
import { prisma } from "@/applications/prismaClient";
import { NewsValidation } from "@/validation/news-validation";
import { ZodError } from "zod";
export class NewsService {
    // get news
    static async getNews(take: number, order: string): Promise<NewsResponse[]> {
        try {
            const result = await prisma?.news.findMany({
                take: take,
                orderBy: {
                    date: order === "asc" ? "asc" : "desc"
                }
            });
            if (!result) return [];
            return result.map(toNewsResponse);
        } catch (error) {
            console.error("Error fetching news:", error);
            return [];
        }
    }

    // add news
    static async create(req: NewsRequest): Promise<NewsResponse | null | { errors: { err: string, message: string }[] }> {
        try {
            req = NewsValidation.CREATE.parse(req);
            const news = await prisma?.news.create({
                data: {
                    category: req.category,
                    title: req.title,
                    date: req.date,
                    comments: req.comments,
                    img: req.img,
                    description: req.description
                }
            });
            return toNewsResponse(news);
        } catch (error) {
            if (error instanceof ZodError) {
                //  handle error zod error
                const errors = error.issues.map(err => ({
                    err: err.path.join('.'),
                    message: err.message
                }))
                return { errors };
            }
            console.error("Error creating news:", error);
            throw new Error("Failed to create news");
        }
    }

    // delete news
    static async delete(id: string): Promise<{ success: boolean } | null> {
        try {
            // cek id
            id = NewsValidation.DELETE.parse({ id }).id;

            const result = await prisma?.news.delete({
                where: {
                    id: id
                }
            })

            if (!result) return null;

            return { success: true };
        } catch (error) {
            if (error instanceof ZodError) {
                return { success: false };
            }
            console.error("Error deleting news:", error);
            return null;
        }
    }
}