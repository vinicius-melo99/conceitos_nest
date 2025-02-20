import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsManualService {
  getConcept(): string {
    return 'são conceitos';
  }
}
