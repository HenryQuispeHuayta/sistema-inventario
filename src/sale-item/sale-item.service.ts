import { Injectable } from '@nestjs/common';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleItemService {
  constructor(private prisma: PrismaService) {}
  async create(createSaleItemDto: CreateSaleItemDto) {
    const product = await this.prisma.product.findUnique({
      where: { id: createSaleItemDto.productId },
    });
    if (product.stock < createSaleItemDto.quantity)
      throw new Error('Insufficient stock');

    await this.prisma.product.update({
      where: { id: createSaleItemDto.productId },
      data: { stock: product.stock - createSaleItemDto.quantity },
    });

    return await this.prisma.saleItem.create({ data: createSaleItemDto });
  }

  findAll() {
    return this.prisma.saleItem.findMany();
  }

  findOne(id: number) {
    return this.prisma.saleItem.findUnique({ where: { id } });
  }

  update(id: number, updateSaleItemDto: UpdateSaleItemDto) {
    return this.prisma.saleItem.update({
      where: { id },
      data: updateSaleItemDto,
    });
  }

  remove(id: number) {
    return this.prisma.saleItem.delete({ where: { id } });
  }
}
