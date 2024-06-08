import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentStatus } from '@prisma/client';


@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async createPayment(@Body() data: any) {
    return this.paymentService.createPayment(data);
  }

  @Post('webhook')
  async handleWebhook(@Body() data: any) {
    // Handle Midtrans webhook here
    const { order_id, transaction_status } = data;

    let status: PaymentStatus;
    switch (transaction_status) {
      case 'capture':
      case 'settlement':
        status = PaymentStatus.SUCCESS;
        break;
      case 'deny':
      case 'cancel':
      case 'expire':
        status = PaymentStatus.FAILED;
        break;
      case 'pending':
        status = PaymentStatus.PENDING;
        break;
      case 'refund':
        status = PaymentStatus.REFUNDED;
        break;
      default:
        status = PaymentStatus.PENDING;
    }

    return this.paymentService.updatePayment(order_id, status);
  }
}



