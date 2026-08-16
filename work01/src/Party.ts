import { Character } from "./Character";

export class Party {
    private name: string;
    private members: Character[];

    public constructor(name: string) {
        this.name = name;
        this.members = [];
    }

    //Getter 
    public getName(): string {
        return this.name;
    }
    public getMembers(): Character[] {
        return this.members;
    }

    //Setter
    public setName(name: string): void {
        this.name = name;
    }
    public setMembers(members: Character[]): void {
        this.members = members;
    }

    //Method
    public addMember(character: Character): void {
        this.members.push(character);
    }
    public removeMember(character: Character): void {
        this.members.splice(this.members.indexOf(character), 1);
    }
    public showMembers(): void {
        console.log(`
========================
${this.name}
========================
`)
        for (let i = 0; i < this.members.length; i++) {
            console.log(`${i + 1}. ${this.members[i].getName()} - Level ${this.members[i].getLevel()}`);
        }
    }



}