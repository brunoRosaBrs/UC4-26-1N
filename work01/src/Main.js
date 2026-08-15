"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("./Character");
const char1 = new Character_1.Character("Vellyan", 200, 4000);
char1.showInfo();
console.log(`Damage taken: ${char1.takeDamage(50)}`);
char1.takeDamage(40);
char1.showInfo();
