import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ex1Service } from './ex1.service';
import { CreateEx1Dto } from './dto/create-ex1.dto';


@Controller('ex1')
export class Ex1Controller {
  constructor(private readonly ex1Service: Ex1Service) {}

  @Post()
  create(@Body() createEx1Dto: CreateEx1Dto) {
    return this.ex1Service.create(createEx1Dto);
  }


}
