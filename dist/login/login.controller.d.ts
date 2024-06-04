import { LoginService } from './login.service';
import { DatabaseService } from 'src/database/database.service';
export declare class LoginController {
    private readonly loginService;
    private readonly prisma;
    constructor(loginService: LoginService, prisma: DatabaseService);
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        id: number;
        username: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
