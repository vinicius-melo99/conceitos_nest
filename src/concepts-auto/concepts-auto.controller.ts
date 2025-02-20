import { Controller, Get } from '@nestjs/common';
import { ConceptsAutoService } from './concepts-auto.service';

@Controller('conceptsauto')
export class ConceptsAutoController {
  constructor(private readonly conceptsAutoService: ConceptsAutoService) {}

  @Get('/')
  getConceptsAuto(): string {
    return this.conceptsAutoService.getConceptsAuto();
  }
}
