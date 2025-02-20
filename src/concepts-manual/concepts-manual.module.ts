import { Module } from '@nestjs/common';
import { ConcepetsManualController } from './concepts-manual.controller';
import { ConceptsManualService } from './concepts-manual.service';

@Module({
  imports: [],
  controllers: [ConcepetsManualController],
  providers: [ConceptsManualService],
  exports: [],
})
export class ConceptsManualModule {}
