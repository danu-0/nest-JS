/*
  Warnings:

  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pesananId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_produkId_fkey";

-- AlterTable
ALTER TABLE "Pesanan" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Payment";

-- DropEnum
DROP TYPE "PaymentStatus";

-- CreateTable
CREATE TABLE "Transaksi" (
    "id" SERIAL NOT NULL,
    "orderId" TEXT NOT NULL,
    "jumlahProduk" INTEGER NOT NULL,
    "totalHarga" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaksi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PesananToTransaksi" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaksi_orderId_key" ON "Transaksi"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "_PesananToTransaksi_AB_unique" ON "_PesananToTransaksi"("A", "B");

-- CreateIndex
CREATE INDEX "_PesananToTransaksi_B_index" ON "_PesananToTransaksi"("B");

-- AddForeignKey
ALTER TABLE "_PesananToTransaksi" ADD CONSTRAINT "_PesananToTransaksi_A_fkey" FOREIGN KEY ("A") REFERENCES "Pesanan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PesananToTransaksi" ADD CONSTRAINT "_PesananToTransaksi_B_fkey" FOREIGN KEY ("B") REFERENCES "Transaksi"("id") ON DELETE CASCADE ON UPDATE CASCADE;
