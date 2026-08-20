export class Spell {
    private name: string;
    private damage: number;
    private manaCost: number;

    public constructor(name: string, damage: number, manaCost: number) {
        this.name = name;
        this.damage = damage;
        this.manaCost = manaCost;
    }

    //Getter
    public getName(): string {
        return this.name;
    }
    public getDamage(): number {
        return this.damage;
    }
    public getManaCost(): number {
        return this.manaCost;
    }

    //Setter 
    public setName(name: string): void {
        this.name = name;
    }
    public setDamage(damage: number): void {
        if (damage > 0) {
            this.damage = damage;
        } else {
            this.damage = 1;
        }
    }
    public setManaCost(manaCost: number): void {
        this.manaCost = manaCost;
    }

    //Method
    public showInfo(): void {
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