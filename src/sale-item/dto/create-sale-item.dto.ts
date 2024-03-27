import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleItemDto {
  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  saleId: number;

  @ApiProperty()
  productId: number;
}
