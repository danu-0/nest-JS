// midtrans.controller.ts

import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MidtransService } from './midtrans.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Controller('midtrans')
export class MidtransController {
  constructor(private readonly midtransService: MidtransService) {}

  @Post('payment')
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    try {
      const token = await this.midtransService.createMidtransPayment(createPaymentDto);
      return { token };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
