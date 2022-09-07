import { ApiProperty } from "@nestjs/swagger";


export class CreateEx1Dto {
    @ApiProperty({

        example: [2,7,11,15]

    })
    arrayone: Array<number>

    @ApiProperty({
        example: 9
    })
    target: number
}
