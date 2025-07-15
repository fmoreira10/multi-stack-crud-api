import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
// This code initializes a NestJS application and starts it on port 3000.
// It imports the necessary modules, creates an application instance, and listens for incoming requests on the specified port.
// The `bootstrap` function is the entry point of the application, and it uses `NestFactory` to create the application instance from the `AppModule`.   