import { Vehicle } from "./Vehicle";
import { Car } from "./Car";
import { Bicycle } from "./Bicycle";


const listOfVehicles: Vehicle[] = [new Car(), new Bicycle()];

listOfVehicles.forEach((vehicle: Vehicle) => {
  vehicle.move();
});