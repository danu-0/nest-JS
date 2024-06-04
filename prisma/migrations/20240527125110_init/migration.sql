/*
  Warnings:

  - You are about to drop the column `role` on the `Produk` table. All the data in the column will be lost.
  - Added the required column `desk` to the `Produk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategori` to the `Produk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pesanan" ADD COLUMN     "desk" TEXT,
ADD COLUMN     "kategori" TEXT;

-- AlterTable
ALTER TABLE "Produk" DROP COLUMN "role",
ADD COLUMN     "desk" TEXT NOT NULL,
ADD COLUMN     "kategori" TEXT NOT NULL;
