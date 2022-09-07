"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ex1Controller = void 0;
const common_1 = require("@nestjs/common");
const ex1_service_1 = require("./ex1.service");
const create_ex1_dto_1 = require("./dto/create-ex1.dto");
let Ex1Controller = class Ex1Controller {
    constructor(ex1Service) {
        this.ex1Service = ex1Service;
    }
    create(createEx1Dto) {
        return this.ex1Service.create(createEx1Dto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ex1_dto_1.CreateEx1Dto]),
    __metadata("design:returntype", void 0)
], Ex1Controller.prototype, "create", null);
Ex1Controller = __decorate([
    (0, common_1.Controller)('ex1'),
    __metadata("design:paramtypes", [ex1_service_1.Ex1Service])
], Ex1Controller);
exports.Ex1Controller = Ex1Controller;
//# sourceMappingURL=ex1.controller.js.map