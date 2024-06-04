import { ProductService } from './product.service';
import { Prisma } from '@prisma/client';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateProductDto: Prisma.ProdukUpdateInput): Promise<{
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
    remove(id: string): Promise<{
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
