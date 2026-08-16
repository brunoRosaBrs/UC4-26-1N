import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character {
    private strength: number;
    private weapon: Weapon;

    public constructor(name: string, level: number, health: number, strength: number, weapon: Weapon) {
        super(name, level, health);
        this.strength = strength;
        this.weapon = weapon;
    }

    //Getter
    public getStrength(): number {
        return this.strength;
    }
    public getWeapon(): Weapon {
        return this.weapon;
    }

    //Setter
    public setStrength(strength: number): void {
        this.strength = strength;
    }
    public setWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }

    //Method
    public attack(): void {
        console.log(`
Warrior attacks with ${this.weapon.getName()!}
Damage: ${this.weapon.getDamage()}  
            `);
    }
}