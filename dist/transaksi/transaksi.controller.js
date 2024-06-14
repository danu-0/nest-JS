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
exports.TransaksiController = void 0;
const common_1 = require("@nestjs/common");
const transaksi_service_1 = require("./transaksi.service");
let TransaksiController = class TransaksiController {
    constructor(transaksiService) {
        this.transaksiService = transaksiService;
    }
    async create(createTransaksiDto) {
        return this.transaksiService.createTransaksi(createTransaksiDto);
    }
    async findOne(id) {
        return this.transaksiService.getTransaksiById(+id);
    }
    async findAll() {
        return this.transaksiService.getAllTransaksi();
    }
    async updateStatus(orderId, updateStatusDto) {
        return this.transaksiService.updateTransaksiStatus(orderId, updateStatusDto.status);
    }
    async remove(id) {
        return this.transaksiService.deleteTransaksi(+id);
    }
};
exports.TransaksiController = TransaksiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransaksiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransaksiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransaksiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':orderId'),
    __param(0, (0, common_1.Param)('orderId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TransaksiController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransaksiController.prototype, "remove", null);
exports.TransaksiController = TransaksiController = __decorate([
    (0, common_1.Controller)('transaksi'),
    __metadata("design:paramtypes", [transaksi_service_1.TransaksiService])
], TransaksiController);
//# sourceMappingURL=transaksi.controller.js.map