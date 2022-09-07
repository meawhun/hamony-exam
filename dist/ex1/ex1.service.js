"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ex1Service = void 0;
const common_1 = require("@nestjs/common");
let Ex1Service = class Ex1Service {
    async create(createEx1Dto) {
        const { arrayone, target } = createEx1Dto;
        const result = [];
        arrayone.forEach((item, index) => {
            arrayone.forEach((item2, index2) => {
                if (item + item2 === target && index !== index2) {
                    result.push(index, index2);
                }
            });
        });
        let uniqueChars = [...new Set(result)];
        return uniqueChars;
    }
};
Ex1Service = __decorate([
    (0, common_1.Injectable)()
], Ex1Service);
exports.Ex1Service = Ex1Service;
//# sourceMappingURL=ex1.service.js.map