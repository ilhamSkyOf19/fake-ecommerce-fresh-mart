import { toUserResponse, UserLogin, UserResponse } from "@/models/user-model";
import { UserValidation } from "@/validation/user-validation";
import argon2 from "argon2";
import { prisma } from "@/applications/prismaClient";
import { ZodError } from "zod";
import { ServiceResult } from "@/types/service-type";



export class AuthService {
    // login 
    static async login(req: UserLogin): Promise<ServiceResult<UserResponse>> {
        try {
            // get query
            req = UserValidation.GET.parse(req)
            const { email, password } = req


            // find password 
            const user = await prisma?.user.findUnique({
                where: {
                    email
                }
            })

            if (!user || !user.password) {
                return {
                    success: false,
                    errors: [{ err: 'unauthorized', message: 'Invalid email or password' }]
                }
            }

            // cek password 
            const passwordMatch = await argon2.verify(user.password, password);

            if (!user || !passwordMatch) {
                return {
                    success: false,
                    errors: [{ err: 'unauthorized', message: 'Invalid email or password' }]
                }
            }

            // return user
            return { success: true, data: toUserResponse(user) };
        } catch (error) {
            if (error instanceof ZodError) {
                // handle error zod error
                return {
                    success: false,
                    errors: error.issues.map(err => ({
                        err: err.path.join('.'),
                        message: err.message
                    }))
                }
            }
            console.error("Error login user:", error);
            throw new Error("Failed to login user");
        }
    }
}