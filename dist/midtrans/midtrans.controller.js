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
exports.MidtransController = void 0;
const common_1 = require("@nestjs/common");
const midtrans_service_1 = require("./midtrans.service");
const create_payment_dto_1 = require("./dto/create-payment.dto");
let MidtransController = class MidtransController {
    constructor(midtransService) {
        this.midtransService = midtransService;
    }
    async createPayment(createPaymentDto) {
        try {
            const token = await this.midtransService.createMidtransPayment(createPaymentDto);
            return { token };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    testEndpoint() {
        return 'Midtrans endpoint is working!';
    }
};
exports.MidtransController = MidtransController;
__decorate([
    (0, common_1.Post)('payment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_dto_1.CreatePaymentDto]),
    __metadata("design:returntype", Promise)
], MidtransController.prototype, "createPayment", null);
__decorate([
    (0, common_1.Get)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MidtransController.prototype, "testEndpoint", null);
exports.MidtransController = MidtransController = __decorate([
    (0, common_1.Controller)('midtrans'),
    __metadata("design:paramtypes", [midtrans_service_1.MidtransService])
], MidtransController);
//# sourceMappingURL=midtrans.controller.js.map