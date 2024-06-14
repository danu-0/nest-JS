import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { PesananModule } from './pesanan/pesanan.module';
import { MidtransModule } from './midtrans/midtrans.module';
import { TransaksiModule } from './transaksi/transaksi.module';

@Module({
  imports: [DatabaseModule, ProductModule, UserModule, LoginModule, PesananModule, MidtransModule, TransaksiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
