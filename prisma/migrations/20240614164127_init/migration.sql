/*
  Warnings:

  - Added the required column `namaPemesan` to the `Transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaksi" ADD COLUMN     "namaPemesan" TEXT NOT NULL;
