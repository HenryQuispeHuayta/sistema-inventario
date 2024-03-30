import { ApiProperty } from '@nestjs/swagger';

export class PurchaseItem {
  @ApiProperty()
  id: number;

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

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
