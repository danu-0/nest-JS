import { Role } from '@prisma/client';
export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    role: Role;
}
