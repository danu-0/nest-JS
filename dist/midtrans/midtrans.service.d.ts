import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class MidtransService {
    private readonly serverKey;
    private readonly clientKey;
    private readonly merchantBaseUrl;
    createMidtransPayment(createPaymentDto: CreatePaymentDto): Promise<any>;
    getPaymentEndpoint(): string;
    getTransactionStatus(orderId: string): Promise<any>;
}
