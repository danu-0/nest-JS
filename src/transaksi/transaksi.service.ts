import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Transaksi } from '@prisma/client';

@Injectable()
export class TransaksiService {
  constructor(private prisma: DatabaseService) {}

  async createTransaksi(data: {
    orderId: string;
    namaPemesan: string;
    jumlahProduk: number;
    totalHarga: number;
    status: string;
  }): Promise<Transaksi> {
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
  async getTransaksiById(id: number): Promise<Transaksi | null> {
    return this.prisma.transaksi.findUnique({
      where: { id },
    });
  }

  async getAllTransaksi(): Promise<Transaksi[]> {
    return this.prisma.transaksi.findMany();
  }

  async updateTransaksiStatus(orderId: string, status: string): Promise<Transaksi> {
    return this.prisma.transaksi.update({
      where: { orderId },
      data: { status },
    });
  }

  async deleteTransaksi(id: number): Promise<Transaksi> {
    return this.prisma.transaksi.delete({
      where: { id },
    });
  }
}
