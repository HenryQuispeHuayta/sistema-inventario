import { ApiProperty } from '@nestjs/swagger';
import { Sale } from '@prisma/client';

export class SaleEntity implements Sale {
  @ApiProperty()
  id: number;

  @ApiProperty()
  code: string;

  @ApiProperty()
  total: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
