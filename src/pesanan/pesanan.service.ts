import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class PesananService {
  constructor(private readonly databaseservice: DatabaseService) {}

  create(createPesananDto: Prisma.PesananCreateInput) {
    return this.databaseservice.pesanan.create({
      data: createPesananDto,
    });
  }

  findAll() {
    return this.databaseservice.pesanan.findMany();
  }

  findOne(id: number) {
    return this.databaseservice.pesanan.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePesananDto: Prisma.PesananUpdateInput) {
    return this.databaseservice.pesanan.update({
      where: { id },
      data: updatePesananDto,
    });
  }

  remove(id: number) {
    return this.databaseservice.pesanan.delete({
      where: { id },
    });
  }

  findByUser(userId: number) {
    return this.databaseservice.pesanan.findMany({
      where: { userId }, 
      include: { produk: true }, 
    });
  }
}
