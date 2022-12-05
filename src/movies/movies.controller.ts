import { Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie id: ${id}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `This will patch a movie id: ${id}`;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete a movie id: ${id}`;
  }
}
