"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    //Getter
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    //Setter
    setName(name) {
        this.name = name;
    }
    setDamage(damage) {
        if (damage > 0) {
            this.damage = damage;
        }
        else {
            this.damage = 1;
        }
    }
    //Method
    showInfo() {
        console.log(`
========================
Weapon
========================
Name: ${this.name}
Damage: ${this.damage}
            `);
    }
}
exports.Weapon = Weapon;
