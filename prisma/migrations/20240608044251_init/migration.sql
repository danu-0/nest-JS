/*
  Warnings:

  - Added the required column `totalBayar` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "ProdukName" TEXT,
ADD COLUMN     "qtt" INTEGER,
ADD COLUMN     "totalBayar" INTEGER NOT NULL,
ALTER COLUMN "harga" DROP NOT NULL;
