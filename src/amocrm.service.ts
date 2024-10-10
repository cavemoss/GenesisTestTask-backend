import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class AmoCrmService {
  private readonly baseUrl = 'https://alexshu1812.amocrm.ru'
  private readonly accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk4NWM3NzU3ZGMxOGE3NTI4NmViNTQxNzZiYjY0OTlkNWI0OTU3YjQ1OWYzY2ZmNzUyZjhiNjU4MDVmZDBhYWI1MTFkMGVhNmYwMDNiN2I2In0.eyJhdWQiOiJjMWM0MjQ5NS1hMTczLTQzOWYtOGI3OS0xNTEzZWU3OWVkOGQiLCJqdGkiOiI5ODVjNzc1N2RjMThhNzUyODZlYjU0MTc2YmI2NDk5ZDViNDk1N2I0NTlmM2NmZjc1MmY4YjY1ODA1ZmQwYWFiNTExZDBlYTZmMDAzYjdiNiIsImlhdCI6MTcyODU0MDA0NCwibmJmIjoxNzI4NTQwMDQ0LCJleHAiOjE3MzAzMzI4MDAsInN1YiI6IjExNTkyMDAyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTgzNDU0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiYTRkMDMyZDMtOGMzNC00NWI5LWJhN2ItNDZhZDE4YzQ5OTJjIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.EUn0FPS-QbXLamaoZA46Q0cPCOz7pRMRaf43IGrQInuv8EH6GbarsCtQTNmQgpR68_ayLwa4HUiPuRB2IvjzncxfSHcfuCC_kJfFQ4A07kyBJ9gcihzOAVJYH-eZmssro8sMWwY9_JGHRhd-k3CB1tlp-MMXHPOzNkmI0hX1Z_d9JKINPOlGZW6G1QJwhHsXMkm8Pa9ZINMqLwOPPM8o2Tdd9nytC5ynH8UJc3nzZ72ypkXfoZ8MvaZ5UJo9uwJ8ozyg5CyXlKBpdb_68LiFP20bRjD4aSBoQFQVCGJLAwNPBkj_6sGprLL0MQ_m2-tI9Df0ek47ezOLz5GGnFveDQ'

  constructor(private readonly httpService: HttpService) {}

  async createEntity(entity: string, data: any): Promise<any> {
    const url = `${this.baseUrl}/api/v4/${entity}`
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    }

    try {
      const response = await firstValueFrom(this.httpService.post(url, data, { headers }))
      return response.data
    } catch (error) {
      throw new Error(`Error creating ${entity}: ${error.message}`)
    }
  }
}
