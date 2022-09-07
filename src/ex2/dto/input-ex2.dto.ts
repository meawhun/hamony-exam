import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class InputEx2Dto {
    @ApiProperty({
        description: 'เงินที่รับมา'
      })
      @IsNotEmpty()
      @IsNumber()
    received: number

    @ApiProperty({
        description: 'ราคาสินค้ารวมทั้งหมด'
      })
      @IsNotEmpty()
      @IsNumber()
    totalprice: number
}
