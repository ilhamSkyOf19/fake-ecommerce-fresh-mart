import z from "zod";

export class NewsValidation {

    // create 
    static readonly CREATE = z.object({
        category: z.string(),
        title: z.string(),
        date: z.string(),
        comments: z.number(),
        img: z.string(),
        description: z.string()
    });

    // delete 
    static readonly DELETE = z.object({
        id: z.string()
    });
}