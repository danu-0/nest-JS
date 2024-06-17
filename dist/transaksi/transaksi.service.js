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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaksiService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let TransaksiService = class TransaksiService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTransaksi(data) {
        const { orderId, namaPemesan, jumlahProduk, totalHarga, status } = data;
        return this.prisma.transaksi.create({
            data: {
                orderId,
                namaPemesan,
                jumlahProduk,
                totalHarga,
                status,
            },
        });
    }
    async getTransaksiById(id) {
        return this.prisma.transaksi.findUnique({
            where: { id },
        });
    }
    async getAllTransaksi() {
        return this.prisma.transaksi.findMany();
    }
    async updateTransaksiStatus(orderId, status) {
        return this.prisma.transaksi.update({
            where: { orderId },
            data: { status },
        });
    }
    async deleteTransaksi(id) {
        return this.prisma.transaksi.delete({
            where: { id },
        });
    }
};
exports.TransaksiService = TransaksiService;
exports.TransaksiService = TransaksiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], TransaksiService);
//# sourceMappingURL=transaksi.service.js.map