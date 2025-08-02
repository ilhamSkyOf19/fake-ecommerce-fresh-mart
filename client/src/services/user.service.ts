import axios from "axios";
import API from "../lib/api";
import type { UserRequest, UserResponse } from "../model/user-model";
import type { ServiceResult } from "../types/response.type";

export class UserService {
    // create 
    static async create(req: UserRequest): Promise<ServiceResult<UserResponse>> {
        try {
            const response = await API.post(
                '/users',
                req, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return {
                success: true,
                data: response.data.data
            };

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    // ✅ Error dari server (status 4xx/5xx)
                    console.log("Status:", error.response.status);
                    console.log("Isi error:", error.response.data);

                    return error.response.data; // { success:false, errors:[...] }
                } else {
                    // ❌ Error jaringan / server tidak merespon
                    console.error("Network error:", error.message);
                    return {
                        success: false,
                        errors: [{ err: "network", message: "Tidak bisa menghubungi server" }]
                    };
                }
            } else {
                // ❌ Error non-Axios (misal bug runtime)
                console.error("Unexpected error:", error);
                return {
                    success: false,
                    errors: [{ err: "unknown", message: "Terjadi kesalahan tidak terduga" }]
                };
            }
        }
    }
}