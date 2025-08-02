import { UserLogin, UserRequest } from "@/models/user-model";
import z, { ZodType } from "zod";

export class UserValidation {


    // create 
    static readonly CREATE: ZodType<UserRequest> = z.object({
        name: z.string(),
        email: z.string(),
        username: z.string(),
        password: z.string()
    })

    // get login
    static readonly GET: ZodType<UserLogin> = z.object({
        email: z.string(),
        password: z.string()
    })
}