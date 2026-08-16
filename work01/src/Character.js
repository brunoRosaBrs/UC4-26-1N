"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, level, health) {
        this.name = name;
        if (level >= 1) {
            this.level = level;
        }
        else {
            this.level = 1;
        }
        this.health = health;
    }
    //Getters
    getName() {
        return this.name;
    }
    getLevel() {
        return this.level;
    }
    getHealth() {
        return this.health;
    }
    //Setters
    setName(name) {
        this.name = name;
    }
    setLevel(level) {
        if (level >= 1) {
            this.level = level;
        }
        else {
            this.level = 1;
        }
    }
    setHealth(health) {
        this.health = health;
    }
    //Method
    showInfo() {
        console.log(`
========================
Character
========================
Name: ${this.name}
Level: ${this.level}
Health: ${this.health}
        `);
    }
    takeDamage(amount) {
        if (this.health - amount >= 0) {
            this.health = this.health - amount;
        }
        else {
            this.health = 0;
        }
    }
}
exports.Character = Character;
