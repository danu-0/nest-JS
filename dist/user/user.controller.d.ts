import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
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
    findOne(id: string): Prisma.Prisma__UserClient<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateUserDto: Prisma.UserUpdateInput): Prisma.Prisma__UserClient<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__UserClient<{
        id: number;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
