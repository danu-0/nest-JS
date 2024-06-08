import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { PesananModule } from './pesanan/pesanan.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [DatabaseModule, ProductModule, UserModule, LoginModule, PesananModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
