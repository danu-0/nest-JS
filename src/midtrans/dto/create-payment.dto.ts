// create-payment.dto.ts

export class CreatePaymentDto {
  namaPemesan: string;
  pesanan: PesananDto[];
  totalHarga: number;
  status: string;
}

export class PesananDto {
  id: number;
  produkId: number;
  ProdukName: string;
  qtt: number;
  harga: number;
}
