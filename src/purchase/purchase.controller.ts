import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('purchase')
@ApiTags('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  @ApiCreatedResponse({ type: CreatePurchaseDto })
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseService.create(createPurchaseDto);
  }

  @Get()
  @ApiOkResponse({ type: [CreatePurchaseDto], isArray: true })
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CreatePurchaseDto })
  findOne(@Param('id') id: string) {
    return this.purchaseService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CreatePurchaseDto })
  update(
    @Param('id') id: string,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ) {
    return this.purchaseService.update(+id, updatePurchaseDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CreatePurchaseDto })
  remove(@Param('id') id: string) {
    return this.purchaseService.remove(+id);
  }
}
