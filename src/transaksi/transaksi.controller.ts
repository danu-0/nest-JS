import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TransaksiService } from './transaksi.service';

@Controller('transaksi')
export class TransaksiController {
  constructor(private readonly transaksiService: TransaksiService) {}

  @Post()
  async create(@Body() createTransaksiDto: { orderId: string, jumlahProduk: number, totalHarga: number, status: string }) {
    return this.transaksiService.createTransaksi(createTransaksiDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.transaksiService.getTransaksiById(+id);
  }

  @Get()
  async findAll() {
    return this.transaksiService.getAllTransaksi();
  }

  @Patch(':orderId')
  async updateStatus(@Param('orderId') orderId: string, @Body() updateStatusDto: { status: string }) {
    return this.transaksiService.updateTransaksiStatus(orderId, updateStatusDto.status);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.transaksiService.deleteTransaksi(+id);
  }
}
