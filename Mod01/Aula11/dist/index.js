"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let name = 'ivon';
if (validator_1.default.isLowercase(name)) {
    console.log('É tudo minusculo');
}
else {
    console.log('Não é tudo minusculo');
}
console.log(validator_1.default.isIP('100.0.222.155'));
