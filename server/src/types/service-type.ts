// service error
export type ServiceError = { err: string, message: string }
export type ServiceResult<T> =
    | { success: true; data: T }
    | { success: false; errors: ServiceError[] };