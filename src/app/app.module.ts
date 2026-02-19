import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from 'src/notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    NotesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: 'Vmelo@2021',
      autoLoadEntities: true, // carrega entidades sem precisar especificá-las
      synchronize: true, // sincroniza tudo com o BD, não usar em produção
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
