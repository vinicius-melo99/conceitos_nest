import { Injectable, NotFoundException } from '@nestjs/common';
import { NoteEntity } from './entities/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  private lastId = 1;
  private notes: NoteEntity[] = [
    {
      id: 1,
      text: 'este é um recado de teste',
      from: 'Joana',
      to: 'João',
      isReaded: false,
      date: new Date(),
    },
  ];

  findAll(): NoteEntity[] {
    return this.notes;
  }

  notFoundException(message: string) {
    throw new NotFoundException(message);
  }

  findOne(id: number) {
    const note = this.notes.find(({ id: noteId }) => noteId === id);

    if (!note) this.notFoundException('Recado não encontrado!');

    return note;
  }

  create(createNoteDto: CreateNoteDto) {
    const id = ++this.lastId;
    const newNote = {
      id,
      ...createNoteDto,
      isReaded: false,
      date: new Date(),
    };

    this.notes.push(newNote);

    return newNote;
  }

  update(id: number, updateRecadoDto: UpdateNoteDto) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);

    if (noteIndex < 0) this.notFoundException('Recado não encontrado!');

    this.notes[noteIndex] = {
      ...this.notes[noteIndex],
      ...updateRecadoDto,
    };

    return this.notes[noteIndex];
  }

  remove(id: number) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);

    if (noteIndex < 0) this.notFoundException('Recado não encontrado!');

    this.notes = this.notes.filter((note) => note.id !== id);

    return 'delete successful';
  }
}
