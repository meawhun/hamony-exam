import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ex2Service } from './ex2.service';
import { InputEx2Dto } from './dto/input-ex2.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('ex2')
@Controller('ex2')
export class Ex2Controller {
  constructor(private readonly ex2Service: Ex2Service) {}

  @Post()
  create(@Body() inputEx2Dto: InputEx2Dto) {
    return this.ex2Service.create(inputEx2Dto);
  }



}
