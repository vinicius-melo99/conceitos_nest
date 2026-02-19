import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateNoteDto {
  @IsString({
    message: 'Precisa ser string porra',
  })
  @IsNotEmpty({
    message: 'Precisa conter um texto',
  })
  @MinLength(3, {
    message: 'precisa de no mínimo 3 caracteres',
  })
  readonly text: string;

  @IsString({
    message: 'Precisa ser string porra',
  })
  @IsNotEmpty({
    message: 'Precisa conter um texto',
  })
  readonly from: string;

  @IsString({
    message: 'Precisa ser string porra',
  })
  @IsNotEmpty({
    message: 'Precisa conter um texto',
  })
  readonly to: string;
}
