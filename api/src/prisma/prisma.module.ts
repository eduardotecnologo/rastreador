import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AppService } from 'src/app.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
