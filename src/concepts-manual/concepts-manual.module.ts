import { Module } from '@nestjs/common';
import { ConceptsManualController } from './concepts-manual.controller';
import { ConceptsManualService } from './concepts-manual.service';

@Module({
  controllers: [ConceptsManualController],
  providers: [ConceptsManualService],
})
export class ConceptsManualModule {}
