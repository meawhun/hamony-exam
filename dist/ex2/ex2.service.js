"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ex2Service = void 0;
const common_1 = require("@nestjs/common");
let Ex2Service = class Ex2Service {
    async create(inputEx2Dto) {
        const { received, totalprice } = inputEx2Dto;
        const change = received - totalprice;
        const cashandcoin = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
        var changeforcal = received - totalprice;
        var sumcash = [];
        cashandcoin.forEach((value) => {
            const bankCount = Math.floor(changeforcal / value);
            if (bankCount > 0) {
                changeforcal = changeforcal - (bankCount * value);
                console.log(changeforcal);
                if (value <= 10) {
                    sumcash.push({
                        "เหรียญ": value,
                        "จำนวน": bankCount
                    });
                }
                else {
                    sumcash.push({
                        "แบงค์": value,
                        "จำนวน": bankCount
                    });
                }
            }
        });
        const result = {
            "เงินที่รับมา": received,
            "ราคาสินค้ารวมทั้งหมด": totalprice,
            "เงินที่ต้องทอน": change,
            "เงินทอน": sumcash
        };
        return result;
    }
};
Ex2Service = __decorate([
    (0, common_1.Injectable)()
], Ex2Service);
exports.Ex2Service = Ex2Service;
//# sourceMappingURL=ex2.service.js.map