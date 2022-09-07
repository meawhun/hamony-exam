import { Injectable } from '@nestjs/common';
import { CreateEx1Dto } from './dto/create-ex1.dto';


@Injectable()
export class Ex1Service {
  async create(createEx1Dto: CreateEx1Dto): Promise<any> {
    const { arrayone, target } = createEx1Dto;
    const result = [];
    arrayone.forEach((item, index) => {
      arrayone.forEach((item2, index2) => {
        if (item + item2 === target && index !== index2) {
          result.push(index, index2);
        }
      });
    }
    );

    let uniqueChars = [...new Set(result)];
    return uniqueChars;
  }


}
