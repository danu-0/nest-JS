import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class PesananService {
    private readonly databaseservice;
    constructor(databaseservice: DatabaseService);
    create(createPesananDto: Prisma.PesananCreateInput): Prisma.Prisma__PesananClient<{
        id: number;
        userId: number;
        produkId: number;
        ProdukName: string;
        qtt: number;
        harga: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        userId: number;
        produkId: number;
        ProdukName: string;
        qtt: number;
        harga: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Prisma.Prisma__PesananClient<{
        id: number;
        userId: number;
        produkId: number;
        ProdukName: string;
        qtt: number;
        harga: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePesananDto: Prisma.PesananUpdateInput): Prisma.Prisma__PesananClient<{
        id: number;
        userId: number;
        produkId: number;
        ProdukName: string;
        qtt: number;
        harga: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__PesananClient<{
        id: number;
        userId: number;
        produkId: number;
        ProdukName: string;
        qtt: number;
        harga: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findByUser(userId: number): Prisma.PrismaPromise<({
        produk: {
            id: number;
            nama: string;
            harga: number;
            stok: number;
            desk: string;
            kategori: string;
            createdAt: Date;
            updatedAt: Date;
            gambar: string;
        };
    } & {
        id: number;
        userId: number;
        produkId: number;
        ProdukName: string;
        qtt: number;
        harga: number;
        desk: string;
        kategori: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
}
