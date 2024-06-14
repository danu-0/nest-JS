import { MidtransService } from './midtrans.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class MidtransController {
    private readonly midtransService;
    constructor(midtransService: MidtransService);
    createPayment(createPaymentDto: CreatePaymentDto): Promise<{
        token: any;
    }>;
    testEndpoint(): string;
}
