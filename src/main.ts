import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const PORT = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
}
bootstrap();
