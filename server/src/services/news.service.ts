import { NewsRequest, NewsResponse, toNewsResponse } from "@/models/news-model";
import { prisma } from "@/applications/prismaClient";
import { NewsValidation } from "@/validation/news-validation";
import { ZodError } from "zod";
import { Prisma } from "generated/prisma";
import { ServiceResult } from "@/types/service-type";
export class NewsService {
    // get news
    static async getNews(take: number, order: string): Promise<ServiceResult<NewsResponse[]>> {
        try {
            const result = await prisma.news.findMany({
                take,
                orderBy: { date: order === "asc" ? "asc" : "desc" },
            });

            return { success: true, data: result.map(toNewsResponse) };
        } catch (error) {
            console.error("Error fetching news:", error);
            return {
                success: false,
                errors: [{ err: "server", message: "Gagal mengambil berita" }],
            };
        }
    }

    // add news
    static async create(req: NewsRequest): Promise<ServiceResult<NewsResponse>> {
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
            return { success: true, data: toNewsResponse(news) };
        } catch (error) {
            if (error instanceof ZodError) {
                //  handle error zod error
                return {
                    success: false, errors: error.issues.map(err => ({
                        err: err.path.join('.'),
                        message: err.message
                    }))
                }
            }
            console.error("Error creating news:", error);
            return {
                success: false,
                errors: [{ err: "server", message: "Gagal membuat berita" }],
            };
        }
    }

    // delete news
    static async delete(id: string): Promise<{ success: boolean; message?: string }> {
        try {
            id = NewsValidation.DELETE.parse({ id }).id;

            await prisma?.news.delete({ where: { id } });


            return { success: true, message: "News deleted successfully" };

        } catch (error) {
            if (error instanceof ZodError) {
                return { success: false, message: "Invalid ID" };
            }
            console.error("Error deleting news:", error);
            return { success: false, message: "news not found" };
        }
    }

}