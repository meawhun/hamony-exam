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
exports.Ex2Controller = void 0;
const common_1 = require("@nestjs/common");
const ex2_service_1 = require("./ex2.service");
const input_ex2_dto_1 = require("./dto/input-ex2.dto");
const swagger_1 = require("@nestjs/swagger");
let Ex2Controller = class Ex2Controller {
    constructor(ex2Service) {
        this.ex2Service = ex2Service;
    }
    create(inputEx2Dto) {
        return this.ex2Service.create(inputEx2Dto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_ex2_dto_1.InputEx2Dto]),
    __metadata("design:returntype", void 0)
], Ex2Controller.prototype, "create", null);
Ex2Controller = __decorate([
    (0, swagger_1.ApiTags)('ex2'),
    (0, common_1.Controller)('ex2'),
    __metadata("design:paramtypes", [ex2_service_1.Ex2Service])
], Ex2Controller);
exports.Ex2Controller = Ex2Controller;
//# sourceMappingURL=ex2.controller.js.map