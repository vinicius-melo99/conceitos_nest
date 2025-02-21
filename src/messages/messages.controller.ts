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
import { Message } from './entities/message.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  // find all messages
  @Get()
  findAll(@Query() pagination: { limit: number; offset: number }): Message[] {
    const { limit = 10, offset = 10 } = pagination;

    console.log(limit, offset);

    return this.messagesService.findAll();
  }

  // find an specific message by its id
  @Get(':id')
  findOne(@Param('id') id: string): Message | { status: string } {
    const message = this.messagesService.findOne(+id);

    if (message) return message;

    return { status: 'not found' };
  }

  @Post()
  create(@Body() body: Message) {
    return this.messagesService.create(body);
  }

  @Patch(':id')
  update(@Body() body: Message, @Param('id') id: string) {
    return this.messagesService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.messagesService.remove(+id);
    return 'removido';
  }
}
