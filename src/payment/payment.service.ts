import { Injectable } from '@nestjs/common';
import { PaymentStatus, Prisma} from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class PaymentService {
  constructor(private readonly databaseservice: DatabaseService) {}


  async createPayment(data: any) {
    return this.databaseservice.payment.create({
      data,
    });
  }

  async updatePayment(id: number, status: PaymentStatus) {
    return this.databaseservice.payment.update({
      where: { id },
      data: { status },
    });
  }
  

  async getPaymentById(id: number) {
    return this.databaseservice.payment.findUnique({
      where: { id },
    });
  }
}


  // create(createPaymentDto: Prisma.PaymentCreateInput) {
  //   return this.databaseservice.payment.create({
  //     data: createPaymentDto,
  //   });
  // }

  // findAll() {
  //   return this.databaseservice.payment.findMany();
  // }

  // findOne(id: number) {
  //   return this.databaseservice.payment.findUnique({
  //     where: { id },
  //   });
  // }

  // update(id: number, updatePaymentDto: Prisma.PaymentUpdateInput) {
  //   return this.databaseservice.payment.update({
  //     where: { id },
  //     data: updatePaymentDto,
  //   });
  // }

  // remove(id: number) {
  //   return this.databaseservice.payment.delete({
  //     where: { id },
  //   });
  // }
