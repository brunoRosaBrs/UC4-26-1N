import { Payments } from "./Payment";
import { CreditCard } from "./CreditCard";
import { Ticket } from "./Ticket";

const listOfPayments: Payments[] = [new Payments(), new CreditCard(), new Ticket()];

listOfPayments.forEach((payment: Payments) => {
    payment.process();
})