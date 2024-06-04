import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class UserService {
    private readonly databaseservice;
    constructor(databaseservice: DatabaseService);
    create(createUserDto: Prisma.UserCreateInput): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findAll(role?: "PELANGGAN" | "ADMIN"): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    findOne(id: number): Prisma.Prisma__UserClient<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: Prisma.UserUpdateInput): Prisma.Prisma__UserClient<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__UserClient<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
