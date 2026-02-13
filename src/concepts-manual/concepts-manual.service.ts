import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsManualService {
  getConcepts(): string {
    return 'Concepts';
  }
}
