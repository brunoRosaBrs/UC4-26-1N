"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./Car");
const Bicycle_1 = require("./Bicycle");
const listOfVehicles = [new Car_1.Car(), new Bicycle_1.Bicycle()];
listOfVehicles.forEach((vehicle) => {
    vehicle.move();
});
