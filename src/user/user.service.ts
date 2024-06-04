// import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
// import { DatabaseService } from 'src/database/database.service';

// @Injectable()
// export class UserService {
//   constructor (private readonly databaseservice: DatabaseService){}
//   async create(createUserDto: Prisma.UserCreateInput) {
//     return this.databaseservice.user.create({
//       data: createUserDto
//     })
//   }

//   async findAll(role?:"PELANGGAN"|"ADMIN") {
//     if(role) return this.databaseservice.user.findMany({
//       where:{
//         role,
//       }
//     })
//     return this.databaseservice.user.findMany()
//   }

//   findOne(id: number) {
//     return this.databaseservice.user.findUnique({
//       where:{id,}
//     })
//   }

//   update(id: number, updateUserDto: Prisma.UserUpdateInput) {
//     return this.databaseservice.user.update({
//       where:{id},
//       data:updateUserDto
//     })
//   }

//   remove(id: number) {
//     return this.databaseservice.user.delete({
//       where:{id,}
//     })
//   }
// }


// enkrypsi
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt'; // Tambahkan import bcrypt

@Injectable()
export class UserService {
  constructor(private readonly databaseservice: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10); // Enkripsi password
    createUserDto.password = hashedPassword; // Ganti password asli dengan password terenkripsi

    return this.databaseservice.user.create({
      data: createUserDto,
    });
  }

  async findAll(role?: "PELANGGAN" | "ADMIN") {
    if (role) {
      return this.databaseservice.user.findMany({
        where: {
          role,
        },
      });
    }
    return this.databaseservice.user.findMany();
  }

  findOne(id: number) {
    return this.databaseservice.user.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseservice.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.databaseservice.user.delete({
      where: { id },
    });
  }
}
