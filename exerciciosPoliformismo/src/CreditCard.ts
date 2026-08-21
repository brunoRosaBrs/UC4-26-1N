import { Payments } from "./Payment";

export class CreditCard extends Payments{
    public process(): void {
        console.log(`Credit card payment`);
    }
}