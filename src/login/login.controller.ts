// import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
// import { LoginService } from './login.service';
// import { DatabaseService } from 'src/database/database.service';

// @Controller('login')
// export class LoginController {
//   constructor(
//     private readonly loginService: LoginService,
//     private readonly prisma: DatabaseService,
//   ) {}

//   @Post()
//   async login(@Body() body: { username: string; password: string }) {
//     const { username, password } = body;
//     console.log('Received login request:', body); // Log untuk memeriksa data yang diterima

//     const user = await this.prisma.user.findFirst({ where: { username } });
//     console.log('Found user:', user); // Log untuk memeriksa data pengguna yang ditemukan

//     if (user && password === user.password) { // Membandingkan password tanpa enkripsi
//       console.log('Password match'); // Log jika password cocok
//       return { id: user.id, username: user.username, email: user.email, role: user.role };
//     } else {
//       console.log('Invalid credentials'); // Log jika password tidak cocok
//       throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
//     }
//   }
// }

// enkripsi
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'src/database/database.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly prisma: DatabaseService
  ) {}

  @Post()
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    console.log('Received login request:', body); // Log untuk memeriksa data yang diterima

    const user = await this.prisma.user.findFirst({ where: { username } });
    console.log('Found user:', user); // Log untuk memeriksa data pengguna yang ditemukan

    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('Password match'); // Log jika password cocok
      return { id: user.id, username: user.username, email: user.email, role: user.role };
    } else {
      console.log('Invalid credentials'); // Log jika password tidak cocok
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }
}
