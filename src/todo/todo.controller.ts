import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() data: CreateTodoDto) {
    return await this.todoService.create(data);
  }

  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }
}
