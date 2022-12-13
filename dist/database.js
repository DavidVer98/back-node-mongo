"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
const startConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield (0, mongoose_1.connect)('mongodb://mongo:HuShxzrEedbhJg1KWVZT@containers-us-west-96.railway.app:5883'); // Connect to database
        console.log('Database is connected,' + db.connection.name); // If connection is successful, show a message
    }
    catch (error) {
        console.log('Error connecting to database', error);
    }
});
exports.startConnection = startConnection;
