import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteEntity } from './entities/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  //Encontrar todos os recados
  @Get()
  findAll(): NoteEntity[] {
    return this.notesService.findAll();
  }

  //Essa rota retorna um recado apenas
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecadoDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    console.log(id, typeof id);

    return this.notesService.remove(id);
  }
}
