import { DatabaseService } from 'src/database/database.service';
import { Transaksi } from '@prisma/client';
export declare class TransaksiService {
    private prisma;
    constructor(prisma: DatabaseService);
    createTransaksi(data: {
        orderId: string;
        namaPemesan: string;
        jumlahProduk: number;
        totalHarga: number;
        status: string;
    }): Promise<Transaksi>;
    getTransaksiById(id: number): Promise<Transaksi | null>;
    getAllTransaksi(): Promise<Transaksi[]>;
    updateTransaksiStatus(orderId: string, status: string): Promise<Transaksi>;
    deleteTransaksi(id: number): Promise<Transaksi>;
}
