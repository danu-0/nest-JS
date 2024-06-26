import { Controller, Get, Post, Body, Patch, Param, Delete, } from '@nestjs/common';
import { ProductService } from './product.service';
import { Prisma } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: Prisma.ProdukCreateInput) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Prisma.ProdukUpdateInput) {
    return this.productService.update(+id, updateProductDto);
  }

  @Patch('update-stock/:id')
  updateStock(@Param('id') id: string, @Body() body: { stok: number }) {
    return this.productService.updateStock(+id, body.stok);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
