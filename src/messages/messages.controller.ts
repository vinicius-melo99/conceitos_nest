import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

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
  findOne(@Param('id') id: string): Message {
    return this.messagesService.findOne(+id);
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @Patch(':id')
  update(@Body() updateMessageDto: UpdateMessageDto, @Param('id') id: string) {
    return this.messagesService.update(+id, updateMessageDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}
