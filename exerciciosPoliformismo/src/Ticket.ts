import { Payments } from "./Payment";

export class Ticket extends Payments{
    public process(): void {
        console.log(`Payment made via bank slip`);
    }
}