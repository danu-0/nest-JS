/*
  Warnings:

  - You are about to drop the column `qtt` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `totalBayar` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "qtt",
DROP COLUMN "totalBayar";
