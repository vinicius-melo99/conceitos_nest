import { Controller, Get } from '@nestjs/common';
import { ConceptsManualService } from './concepts-manual.service';

@Controller('concepts')
export class ConcepetsManualController {
  constructor(private readonly conceptsManualService: ConceptsManualService) {}

  @Get('')
  getConcepts(): string {
    return this.conceptsManualService.getConcept();
  }
}
