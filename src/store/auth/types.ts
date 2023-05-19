export interface User {
    email: string;
    role: Roles;
}

export interface withToken {
    access_token: string,
}

export enum Roles {
    STUDENT,
    HR,
    ADMIN,
}
