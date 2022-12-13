"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
(0, database_1.startConnection)(); // Call startConnection function
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT);
console.log(`Server runing on port ${PORT}`);
