/*
  Warnings:

  - Added the required column `role` to the `Produk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produk" ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL;
