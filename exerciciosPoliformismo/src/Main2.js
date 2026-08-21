"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = require("./Payment");
const CreditCard_1 = require("./CreditCard");
const Ticket_1 = require("./Ticket");
const listOfPayments = [new Payment_1.Payments(), new CreditCard_1.CreditCard(), new Ticket_1.Ticket()];
listOfPayments.forEach((payment) => {
    payment.process();
});
