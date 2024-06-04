"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./login.service");
const bcrypt = require("bcrypt");
const database_service_1 = require("../database/database.service");
let LoginController = class LoginController {
    constructor(loginService, prisma) {
        this.loginService = loginService;
        this.prisma = prisma;
    }
    async login(body) {
        const { username, password } = body;
        console.log('Received login request:', body);
        const user = await this.prisma.user.findFirst({ where: { username } });
        console.log('Found user:', user);
        if (user && (await bcrypt.compare(password, user.password))) {
            console.log('Password match');
            return { id: user.id, username: user.username, email: user.email, role: user.role };
        }
        else {
            console.log('Invalid credentials');
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
exports.LoginController = LoginController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "login", null);
exports.LoginController = LoginController = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        database_service_1.DatabaseService])
], LoginController);
//# sourceMappingURL=login.controller.js.map