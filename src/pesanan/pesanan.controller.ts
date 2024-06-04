import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PesananService } from './pesanan.service';
import { Prisma } from '@prisma/client';

@Controller('pesanan')
export class PesananController {
  constructor(private readonly pesananService: PesananService) {}

  @Post()
  create(@Body() createPesananDto: Prisma.PesananCreateInput) {
    return this.pesananService.create(createPesananDto);
  }

  @Get()
  findAll() {
    return this.pesananService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pesananService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePesananDto: Prisma.PesananUpdateInput) {
    return this.pesananService.update(+id, updatePesananDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pesananService.remove(+id);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.pesananService.findByUser(+userId); 
  }
}
