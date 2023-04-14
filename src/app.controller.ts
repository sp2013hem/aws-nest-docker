import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { PostService } from './post.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly postService: PostService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hi')
  getHi(): string {
    return 'hi';
  }

  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<any> {
    return this.postService.post({ id: Number(id) });
  }

  @Get('posts')
  async getPublishedPosts(): Promise<any> {
    return this.postService.posts({});
  }

  @Post('post')
  async createDraft(@Body() postData: { title: string }): Promise<any> {
    const { title } = postData;
    return this.postService.createPost({
      title,
    });
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<any> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
