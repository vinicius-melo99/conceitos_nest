import { Module } from '@nestjs/common';
import { ConceptsAutoController } from './concepts-auto.controller';
import { ConceptsAutoService } from './concepts-auto.service';

@Module({
  imports: [],
  controllers: [ConceptsAutoController],
  providers: [ConceptsAutoService],
  exports: [],
})
export class ConceptsAutoModule {}
