import { Module } from '@nestjs/common';
import { PurchaseItemService } from './purchase-item.service';
import { PurchaseItemController } from './purchase-item.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PurchaseItemController],
  providers: [PurchaseItemService],
  imports: [PrismaModule],
})
export class PurchaseItemModule {}
