import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { AmoCrmModule } from './amocrm.module'

async function bootstrap() {
  const app = await NestFactory.create(AmoCrmModule)
  app.enableCors()
  await app.listen(8000)
  Logger.log('http://localhost:8000')
}
bootstrap()
