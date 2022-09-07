"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ex1Module = void 0;
const common_1 = require("@nestjs/common");
const ex1_service_1 = require("./ex1.service");
const ex1_controller_1 = require("./ex1.controller");
let Ex1Module = class Ex1Module {
};
Ex1Module = __decorate([
    (0, common_1.Module)({
        controllers: [ex1_controller_1.Ex1Controller],
        providers: [ex1_service_1.Ex1Service]
    })
], Ex1Module);
exports.Ex1Module = Ex1Module;
//# sourceMappingURL=ex1.module.js.map