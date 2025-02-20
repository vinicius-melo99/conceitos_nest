import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  // find all messages
  @Get()
  findAll(@Query() pagination: { limit: number; offset: number }): string {
    const { limit = 10, offset = 10 } = pagination;

    console.log(limit, offset);

    return this.messagesService.findAll();
  }

  // find an specific message by its id
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.messagesService.findOne(id);
  }

  @Post()
  create(@Body() body: { author: number; message: string }) {
    return body;
  }

  @Patch(':id')
  update(
    @Body() body: { author: number; message: string },
    @Param('id') id: string,
  ) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Recado ${id} deletado com sucesso`;
  }
}
