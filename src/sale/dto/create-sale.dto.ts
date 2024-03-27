import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleDto {
  @ApiProperty()
  code: string;

  @ApiProperty()
  total: number;
}
