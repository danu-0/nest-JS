export declare class CreatePaymentDto {
    namaPemesan: string;
    pesanan: PesananDto[];
    totalHarga: number;
    status: string;
}
export declare class PesananDto {
    id: number;
    produkId: number;
    ProdukName: string;
    qtt: number;
    harga: number;
}
