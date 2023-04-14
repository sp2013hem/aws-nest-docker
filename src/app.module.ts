import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PostService } from './post.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PostService, PrismaService],
})
export class AppModule {}
