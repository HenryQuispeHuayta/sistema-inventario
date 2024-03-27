import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  stock: number;

  @ApiProperty()
  pricePurchase: number;

  @ApiProperty()
  priceSale: number;
}
