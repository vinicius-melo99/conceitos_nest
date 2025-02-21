import { IsString } from 'class-validator';

export class UpdateMessageDto {
  @IsString()
  readonly text?: string;

  @IsString()
  readonly from?: string;

  @IsString()
  readonly to?: string;
}
