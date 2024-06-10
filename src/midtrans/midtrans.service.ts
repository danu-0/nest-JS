import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreatePaymentDto } from './dto/create-payment.dto';
const midtransClient = require('midtrans-client');

@Injectable()
export class MidtransService {
  private readonly serverKey = process.env.MIDTRANS_SERVER_KEY;
  private readonly clientKey = process.env.MIDTRANS_CLIENT_KEY;
  private readonly merchantBaseUrl = process.env.MERCHANT_BASE_URL;

  async createMidtransPayment(createPaymentDto: CreatePaymentDto) {
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
    } catch (error) {
      console.error('Error creating Midtrans payment:', error);
      throw new Error('Failed to create Midtrans payment: ' + error.message);
    }
  }
  getPaymentEndpoint(): string {
    return `${this.merchantBaseUrl}/midtrans/payment`; // Tentukan endpoint pembuatan pembayaran di sini
  }
}
