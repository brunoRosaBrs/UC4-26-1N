"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    constructor(name, level, health, strength, weapon) {
        super(name, level, health);
        this.strength = strength;
        this.weapon = weapon;
    }
    //Getter
    getStrength() {
        return this.strength;
    }
    getWeapon() {
        return this.weapon;
    }
    //Setter
    setStrength(strength) {
        this.strength = strength;
    }
    setWeapon(weapon) {
        this.weapon = weapon;
    }
    //Method
    attack() {
        console.log(`
Warrior attacks with ${this.weapon.getName()}
Damage: ${this.weapon.getDamage()}  
            `);
    }
}
exports.Warrior = Warrior;
