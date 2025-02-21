import { Injectable } from '@nestjs/common';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  private lastId = 1;
  private messages: Message[] = [
    {
      id: 1,
      text: 'recado de teste',
      from: 'Joana',
      to: 'João',
      read: false,
      date: new Date(),
    },
  ];

  // find all messages
  findAll(): Message[] {
    return this.messages;
  }

  // find an specific message by its id or null if it not exists
  findOne(id: number): Message | null {
    const message = this.messages.find((message) => id === message.id);

    if (message) return message;

    return null;
  }

  create(message: Message): Message {
    this.lastId++;
    const id = this.lastId;

    const newMessage = {
      id,
      ...message,
    };

    this.messages.push(newMessage);

    return newMessage;
  }

  update(id: number, body: Message) {
    const message = this.messages.find((message) => message.id === id);
    const index = this.messages.findIndex((message) => message.id === id);

    const updatedMessage = {
      ...message,
      ...body,
    };

    this.messages[index] = updatedMessage;

    return updatedMessage;
  }

  remove(id: number) {
    const messagesAfterRemoved = this.messages.filter(
      (message) => message.id !== id,
    );

    return (this.messages = messagesAfterRemoved);
  }
}
