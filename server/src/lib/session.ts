import { SessionOptions } from "iron-session";

export type SessionData = {
    id?: string;
    email?: string;
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY_SESSION as string,
    cookieName: "session",
    ttl: 60,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60
    }
}