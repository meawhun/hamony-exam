import { Injectable } from '@nestjs/common';
import { arrayBuffer } from 'stream/consumers';
import { InputEx2Dto } from './dto/input-ex2.dto';

@Injectable()
export class Ex2Service {
  async create(inputEx2Dto: InputEx2Dto): Promise<any> {
    const { received, totalprice } = inputEx2Dto;
    const change = received - totalprice;
    const cashandcoin = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    var changeforcal = received - totalprice;
    var sumcash = []
    cashandcoin.forEach((value) => {
      const bankCount = Math.floor(changeforcal / value);
      if (bankCount > 0) {
        changeforcal = changeforcal - (bankCount * value);
        console.log(changeforcal);

        if (value <= 10) {
          sumcash.push({
            "เหรียญ": value,
            "จำนวน": bankCount
          })
        } else {
          sumcash.push({
            "แบงค์": value,
            "จำนวน": bankCount
          })
        }
      }
    });

    const result = {
      "เงินที่รับมา": received,
      "ราคาสินค้ารวมทั้งหมด": totalprice,
      "เงินที่ต้องทอน": change,
      "เงินทอน": sumcash
    }

    return result
  }



}

