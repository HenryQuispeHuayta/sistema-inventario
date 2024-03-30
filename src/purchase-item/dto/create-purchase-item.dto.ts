import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseItemDto {
  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  purchaseId: number;

  @ApiProperty()
  productId: number;
}
