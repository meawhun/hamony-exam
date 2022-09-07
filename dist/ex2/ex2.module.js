"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ex2Module = void 0;
const common_1 = require("@nestjs/common");
const ex2_service_1 = require("./ex2.service");
const ex2_controller_1 = require("./ex2.controller");
let Ex2Module = class Ex2Module {
};
Ex2Module = __decorate([
    (0, common_1.Module)({
        controllers: [ex2_controller_1.Ex2Controller],
        providers: [ex2_service_1.Ex2Service]
    })
], Ex2Module);
exports.Ex2Module = Ex2Module;
//# sourceMappingURL=ex2.module.js.map