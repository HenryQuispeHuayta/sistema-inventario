import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurchaseItemService } from './purchase-item.service';
import { CreatePurchaseItemDto } from './dto/create-purchase-item.dto';
import { UpdatePurchaseItemDto } from './dto/update-purchase-item.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('purchase-item')
@ApiTags('purchase-item')
export class PurchaseItemController {
  constructor(private readonly purchaseItemService: PurchaseItemService) {}

  @Post()
  @ApiCreatedResponse({ type: CreatePurchaseItemDto })
  create(@Body() createPurchaseItemDto: CreatePurchaseItemDto) {
    return this.purchaseItemService.create(createPurchaseItemDto);
  }

  @Get()
  @ApiOkResponse({ type: [CreatePurchaseItemDto], isArray: true })
  findAll() {
    return this.purchaseItemService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CreatePurchaseItemDto })
  findOne(@Param('id') id: string) {
    return this.purchaseItemService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CreatePurchaseItemDto })
  update(
    @Param('id') id: string,
    @Body() updatePurchaseItemDto: UpdatePurchaseItemDto,
  ) {
    return this.purchaseItemService.update(+id, updatePurchaseItemDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CreatePurchaseItemDto })
  remove(@Param('id') id: string) {
    return this.purchaseItemService.remove(+id);
  }
}
