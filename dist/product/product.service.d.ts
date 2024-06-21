import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ProductService {
    private readonly databaseservice;
    constructor(databaseservice: DatabaseService);
    create(createProductDto: Prisma.ProdukCreateInput): Promise<{
        id: number;
        nama: string;
        harga: number;
        stok: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
        gambar: string;
    }>;
    findAll(): Promise<{
        id: number;
        nama: string;
        harga: number;
        stok: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
        gambar: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nama: string;
        harga: number;
        stok: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
        gambar: string;
    }>;
    update(id: number, updateProductDto: Prisma.ProdukUpdateInput): Promise<{
        id: number;
        nama: string;
        harga: number;
        stok: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
        gambar: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nama: string;
        harga: number;
        stok: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
        gambar: string;
    }>;
    updateStock(id: number, stok: number): Promise<{
        id: number;
        nama: string;
        harga: number;
        stok: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
        gambar: string;
    }>;
}
