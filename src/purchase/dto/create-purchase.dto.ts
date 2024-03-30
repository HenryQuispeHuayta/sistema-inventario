import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDto {
  @ApiProperty()
  code: string;

  @ApiProperty()
  total: number;
}
