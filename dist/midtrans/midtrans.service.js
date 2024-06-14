"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MidtransService = void 0;
const common_1 = require("@nestjs/common");
const midtransClient = require('midtrans-client');
let MidtransService = class MidtransService {
    constructor() {
        this.serverKey = process.env.MIDTRANS_SERVER_KEY;
        this.clientKey = process.env.MIDTRANS_CLIENT_KEY;
        this.merchantBaseUrl = process.env.MERCHANT_BASE_URL;
    }
    async createMidtransPayment(createPaymentDto) {
        const { totalHarga, pesanan, namaPemesan } = createPaymentDto;
        const items = pesanan.map((item) => ({
            id: item.id.toString(),
            price: item.harga,
            quantity: item.qtt,
            name: item.ProdukName,
        }));
        const transactionDetails = {
            order_id: `order-${Date.now()}`,
            gross_amount: totalHarga,
        };
        const customerDetails = {
            first_name: namaPemesan,
            email: 'customer@example.com',
        };
        const payload = {
            transaction_details: transactionDetails,
            item_details: items,
            customer_details: customerDetails,
            credit_card: {
                secure: true
            }
        };
        try {
            const snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: this.serverKey,
            });
            const transaction = await snap.createTransaction(payload);
            const transactionToken = transaction.token;
            console.log('transactionToken:', transactionToken);
            return transactionToken;
        }
        catch (error) {
            console.error('Error creating Midtrans payment:', error);
            throw new Error('Failed to create Midtrans payment: ' + error.message);
        }
    }
    getPaymentEndpoint() {
        return `${this.merchantBaseUrl}/midtrans/payment`;
    }
    async getTransactionStatus(orderId) {
        try {
            const snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: this.serverKey,
            });
            const transaction = await snap.transaction.status(orderId);
            return transaction;
        }
        catch (error) {
            console.error('Error fetching transaction status:', error);
            throw new Error('Failed to fetch transaction status: ' + error.message);
        }
    }
};
exports.MidtransService = MidtransService;
exports.MidtransService = MidtransService = __decorate([
    (0, common_1.Injectable)()
], MidtransService);
//# sourceMappingURL=midtrans.service.js.map