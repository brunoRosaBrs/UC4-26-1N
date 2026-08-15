export class Character {
    private name: string
    private level: number
    private health: number

    public constructor(name: string, level: number, health: number) {
        this.name = name;
        if (level >= 1) {
            this.level = level;
        } else {
            this.level = 1
        }
        this.health = health;
    }

    //Getters
    public getName(): string {
        return this.name;
    }
    public getLevel(): number {
        return this.level;
    }
    public getHealth(): number {
        return this.health;
    }

    //Setters
    public setName(name: string): void {
        this.name = name;
    }
    public setLevel(level: number): void {
        if (level >= 1) {
            this.level = level;
        } else {
            this.level = 1;
        }
    }
    public setHealth(health: number): void {
        this.health = health;
    }

    //Method
    public showInfo(): void {
        console.log(`
        ========================
Character
========================
Name: ${this.name}
Level: ${this.level}
Health: ${this.health}
        `)
    }

    public takeDamage(amount: number): void {
        if (this.health - amount >= 0) {
            this.health = this.health - amount
        } else {
            this.health = 0;
        }
    }
} 
