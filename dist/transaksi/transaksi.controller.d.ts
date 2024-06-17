import { TransaksiService } from './transaksi.service';
export declare class TransaksiController {
    private readonly transaksiService;
    constructor(transaksiService: TransaksiService);
    create(createTransaksiDto: {
        orderId: string;
        namaPemesan: string;
        jumlahProduk: number;
        totalHarga: number;
        status: string;
    }): Promise<{
        id: number;
        orderId: string;
        namaPemesan: string;
        jumlahProduk: number;
        totalHarga: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: string): Promise<{
        id: number;
        orderId: string;
        namaPemesan: string;
        jumlahProduk: number;
        totalHarga: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        orderId: string;
        namaPemesan: string;
        jumlahProduk: number;
        totalHarga: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateStatus(orderId: string, updateStatusDto: {
        status: string;
    }): Promise<{
        id: number;
        orderId: string;
        namaPemesan: string;
        jumlahProduk: number;
        totalHarga: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        orderId: string;
        namaPemesan: string;
        jumlahProduk: number;
        totalHarga: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
