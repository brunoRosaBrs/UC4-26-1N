"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCard = void 0;
const Payment_1 = require("./Payment");
class CreditCard extends Payment_1.Payments {
    process() {
        console.log(`Credit card payment`);
    }
}
exports.CreditCard = CreditCard;
