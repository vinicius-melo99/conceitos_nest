import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  // find all messages
  findAll(): string {
    return 'Retorna todos os recados';
  }

  // find an specific message by its id
  findOne(id: string): string {
    return `Esta rota retorna o recado ${id}`;
  }
}
