import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/notes')
export class NotesController {
  //Encontrar todos os recados
  @Get()
  findAll() {
    return 'Essa rota retorna todos os recados';
  }

  //Essa rota retorna um recado apenas
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `essa rota retorna o recado ${id}`;
  }

  @Post()
  create() {
    return `essa rota cria um novo recado`;
  }
}
