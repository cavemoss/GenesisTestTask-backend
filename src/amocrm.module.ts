import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { AmoCrmController } from './amocrm.controller'
import { AmoCrmService } from './amocrm.service'

@Module({
  imports: [HttpModule],
  controllers: [AmoCrmController],
  providers: [AmoCrmService],
})
export class AmoCrmModule {}
