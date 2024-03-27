import { Module } from '@nestjs/common';
import { SaleItemService } from './sale-item.service';
import { SaleItemController } from './sale-item.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SaleItemController],
  providers: [SaleItemService],
  imports: [PrismaModule],
})
export class SaleItemModule {}
