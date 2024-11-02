import Role from "../enum/Role";

export interface User {
    id?: string,
    email?: string,
    password?: string,
    name?: string,
    role?: Role|undefined,
    about?: string,
    createdAt?: string,
    active?: boolean,
    jwtToken?: string
}