Warrior: 
export class Warrior {
    private health: number;
    private name: string;
    private type: string;
    private strength: number;

    public constructor(name: string, type: string) {
        this.health = 100;
        this.name = name;
        this.type = type;
        this.strength = 40;
    }

    // Getter
    public getName(): string {
        return this.name;
    }

    public getStrength(): number {
        return this.strength;
    }

    public getHealth(): number {
        return this.health;
    }

    // Setter
    public setName(newName: string): void {
        this.name = newName;
    }

    public setStrength(newStrength: number): void {
        this.strength = newStrength;
    }

    public setHealth(newHealth: number): void {
        if (newHealth >= 0) {
            this.health = newHealth;
        } else {
            console.log("New health status invalid");
        }
    }

    public attack(): void {
        console.log("The warrior attacked!");
    }

    public defender(): void {
        console.log("The warrior defended himself!");
    }

    public dodge(): void {
        console.log("The warrior dodged!");
    }
}




######
MONSTER:
export class Monster {
    private health: number;
    private name: string;
    private strength: number;


    public constructor(name: string){
        this.health = 10;
        this.name = name;
        this.strength = 50;
    }

    // Getter
    public getName(): string {
        return this.name;
    }

    public getStrength(): number {
        return this.strength;
    }

    public getHealth(): number {
        return this.health;
    }

    // Setter
    public setName(newName: string): void {
        this.name = newName;
    }

    public setStrength(newStrength: number): void {
        this.strength = newStrength;
    }

    public setHealth(newHealth: number): void {
        if (newHealth >= 0) {
            this.health = newHealth;
        } else {
            console.log("New health status invalid");
        }
    }


    public attack(): void {
        console.log("The monster attacked!");
    }

    public defender(): void {
        console.log("The monster defended itself!");
    }

    public dodge(): void {
        console.log("The monster dodged!");
    }

}


#####

MAIN:
import { Warrior } from "./Warrior";
import { Monster } from "./Monster";

const warrior1: Warrior = new Warrior("Vellyan", "Samurai");
const monster1: Monster = new Monster("Matador de passarinho");

// Ataques
warrior1.attack();
monster1.attack();

// Getter
console.log(warrior1.getName());

// Setter
warrior1.setName("Sem nome");

// Getters
console.log(warrior1.getName());
console.log(warrior1.getHealth());
console.log(warrior1.getStrength());

// Ataque novamente
warrior1.attack();
