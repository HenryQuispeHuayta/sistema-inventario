import { Injectable } from '@nestjs/common';
import { CreatePurchaseItemDto } from './dto/create-purchase-item.dto';
import { UpdatePurchaseItemDto } from './dto/update-purchase-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PurchaseItemService {
  constructor(private prisma: PrismaService) {}
  create(createPurchaseItemDto: CreatePurchaseItemDto) {
    return this.prisma.purchaseItem.create({ data: createPurchaseItemDto });
  }

  findAll() {
    return this.prisma.purchaseItem.findMany();
  }

  findOne(id: number) {
    return this.prisma.purchaseItem.findUnique({ where: { id } });
  }

  update(id: number, updatePurchaseItemDto: UpdatePurchaseItemDto) {
    return this.prisma.purchaseItem.update({
      where: { id },
      data: updatePurchaseItemDto,
    });
  }

  remove(id: number) {
    return this.prisma.purchaseItem.delete({ where: { id } });
  }
}
