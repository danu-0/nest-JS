import { Module } from '@nestjs/common';
import { TransaksiService } from './transaksi.service';
import { TransaksiController } from './transaksi.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [TransaksiController],
  providers: [TransaksiService, DatabaseService],
})
export class TransaksiModule {}
