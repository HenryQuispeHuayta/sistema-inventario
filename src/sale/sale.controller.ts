import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('sale')
@ApiTags('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  @ApiCreatedResponse({ type: CreateSaleDto })
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @Get()
  @ApiOkResponse({ type: [CreateSaleDto], isArray: true })
  findAll() {
    return this.saleService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CreateSaleDto })
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CreateSaleDto })
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CreateSaleDto })
  remove(@Param('id') id: string) {
    return this.saleService.remove(+id);
  }
}
