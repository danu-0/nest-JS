import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductService {
  constructor(private readonly databaseservice: DatabaseService) {}

  async create(createProductDto: Prisma.ProdukCreateInput) {
    return this.databaseservice.produk.create({
      data: createProductDto,
    });
  }

  async findAll() {
    return this.databaseservice.produk.findMany();
  }

  async findOne(id: number) {
    return this.databaseservice.produk.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProductDto: Prisma.ProdukUpdateInput) {
    return this.databaseservice.produk.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return this.databaseservice.produk.delete({
      where: { id },
    });
  }
  async updateStock(id: number, stok: number){
    return this.databaseservice.produk.update({
      where:{id},
      data:{
        stok: {
          decrement: stok,
        }}
    });
    
    }
  }

