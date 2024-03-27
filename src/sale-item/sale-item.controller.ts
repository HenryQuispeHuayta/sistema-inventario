import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleItemService } from './sale-item.service';
import { CreateSaleItemDto } from './dto/create-sale-item.dto';
import { UpdateSaleItemDto } from './dto/update-sale-item.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('sale-item')
@ApiTags('sale-item')
export class SaleItemController {
  constructor(private readonly saleItemService: SaleItemService) {}

  @Post()
  @ApiCreatedResponse({ type: CreateSaleItemDto })
  create(@Body() createSaleItemDto: CreateSaleItemDto) {
    return this.saleItemService.create(createSaleItemDto);
  }

  @Get()
  @ApiOkResponse({ type: [CreateSaleItemDto], isArray: true })
  findAll() {
    return this.saleItemService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CreateSaleItemDto })
  findOne(@Param('id') id: string) {
    return this.saleItemService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CreateSaleItemDto })
  update(
    @Param('id') id: string,
    @Body() updateSaleItemDto: UpdateSaleItemDto,
  ) {
    return this.saleItemService.update(+id, updateSaleItemDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CreateSaleItemDto })
  remove(@Param('id') id: string) {
    return this.saleItemService.remove(+id);
  }
}
