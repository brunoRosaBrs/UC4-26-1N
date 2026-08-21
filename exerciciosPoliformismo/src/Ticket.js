"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const Payment_1 = require("./Payment");
class Ticket extends Payment_1.Payments {
    process() {
        console.log(`Payment made via bank slip`);
    }
}
exports.Ticket = Ticket;
