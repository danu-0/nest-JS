/*
  Warnings:

  - You are about to drop the column `total` on the `Pesanan` table. All the data in the column will be lost.
  - Added the required column `harga` to the `Pesanan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtt` to the `Pesanan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pesanan" DROP COLUMN "total",
ADD COLUMN     "harga" INTEGER NOT NULL,
ADD COLUMN     "qtt" INTEGER NOT NULL;
