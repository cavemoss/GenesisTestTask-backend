import { Controller, Post, Body } from '@nestjs/common'
import { AmoCrmService } from './amocrm.service'

@Controller('amocrm')
export class AmoCrmController {
  constructor(private readonly Service: AmoCrmService) {}

  @Post('create')
  async createEntity(
    @Body('entity') entity: string, 
    @Body('data') data: any
  )
  { return await this.Service.createEntity(entity, data) }
}
