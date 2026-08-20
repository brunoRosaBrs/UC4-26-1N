"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spell = void 0;
class Spell {
    constructor(name, damage, manaCost) {
        this.name = name;
        this.damage = damage;
        this.manaCost = manaCost;
    }
    //Getter
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getManaCost() {
        return this.manaCost;
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
    setManaCost(manaCost) {
        this.manaCost = manaCost;
    }
    //Method
    showInfo() {
        console.log(`
========================
Spell
========================
Name: ${this.name}
Damage: ${this.damage}
Mana Cost: ${this.manaCost}
`);
    }
}
exports.Spell = Spell;
