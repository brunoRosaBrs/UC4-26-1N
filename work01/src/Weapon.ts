export class Weapon {
    private name: string;
    private damage: number;

    public constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }


    //Getter
    public getName(): string {
        return this.name;
    }
    public getDamage(): number {
        return this.damage;
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


    //Method
    public showInfo(): void {
        console.log(`
========================
Weapon
========================
Name: ${this.name}
Damage: ${this.damage}
            `);
    }
}