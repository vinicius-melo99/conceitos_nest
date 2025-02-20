import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsAutoService {
  getConceptsAuto(): string {
    return 'conceitos automaticos';
  }
}
