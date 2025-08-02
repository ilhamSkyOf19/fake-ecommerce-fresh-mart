import { User } from "generated/prisma";


export type UserLogin = {
    email: string;
    password: string;
}
export type UserRequest = {
    name: string;
    email: string;
    username: string;
    password: string;
}

export type UserResponse = {
    id: string;
    name: string;
    email: string;
    username: string;
}

// to response 
export const toUserResponse = (user: User): UserResponse => {
    return {
        id: user.id ?? '',
        name: user.name ?? '',
        email: user.email ?? '',
        username: user.username ?? '',
    }
}