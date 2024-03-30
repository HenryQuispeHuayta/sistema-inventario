import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { SaleModule } from './sale/sale.module';
import { SaleItemModule } from './sale-item/sale-item.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseItemModule } from './purchase-item/purchase-item.module';

@Module({
  imports: [ProductModule, PrismaModule, SaleModule, SaleItemModule, PurchaseModule, PurchaseItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
