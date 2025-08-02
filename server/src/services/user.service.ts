import { toUserResponse, UserRequest, UserResponse } from "@/models/user-model";
import { UserValidation } from "@/validation/user-validation";
import { ZodError } from "zod";
import { prisma } from "@/applications/prismaClient";
import { ServiceResult } from "@/types/service-type";

export class UserService {

    // crete 
    static async create(req: UserRequest): Promise<ServiceResult<UserResponse>> {
        try {
            // cek req
            req = UserValidation.CREATE.parse(req) as UserRequest;

            // get user 
            const findUser = await this.get(req.email);

            if (findUser.success) {
                return { success: false, errors: [{ err: "email", message: "Email already exists" }] };
            }

            // create user
            const response = await prisma?.user.create({
                data: {
                    ...req
                }
            })
            return { success: true, data: toUserResponse(response) };
        } catch (error) {
            // err zod
            if (error instanceof ZodError) {
                // get error zod 
                return {
                    success: false,
                    errors: error.issues.map(err => ({
                        err: err.path.join('.'),
                        message: err.message
                    }))
                }
            }

            console.error("Error creating user:", error);
            return {
                success: false,
                errors: [{ err: "server", message: "Failed to create user" }],
            };
        }
    }

    // get user 
    static async get(email: string): Promise<ServiceResult<UserResponse>> {
        try {
            const response = await prisma?.user.findUnique({
                where: {
                    email
                }
            })

            if (!response) {
                return { success: false, errors: [{ err: "empty", message: "User not found" }] };
            }

            return { success: true, data: toUserResponse(response) };
        } catch (error) {
            console.error("Error getting user:", error);
            return {
                success: false,
                errors: [{ err: "server", message: "Failed to get user" }],
            };
        }
    }

}