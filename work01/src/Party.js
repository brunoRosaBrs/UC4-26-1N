"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
class Party {
    constructor(name) {
        this.name = name;
        this.members = [];
    }
    //Getter 
    getName() {
        return this.name;
    }
    getMembers() {
        return this.members;
    }
    //Setter
    setName(name) {
        this.name = name;
    }
    setMembers(members) {
        this.members = members;
    }
    //Method
    addMember(character) {
        this.members.push(character);
    }
    removeMember(character) {
        this.members.splice(this.members.indexOf(character), 1);
    }
    showMembers() {
        console.log(`
========================
${this.name}
========================
`);
        for (let i = 0; i < this.members.length; i++) {
            console.log(`${i + 1}. ${this.members[i].getName()} - Level ${this.members[i].getLevel()}`);
        }
    }
}
exports.Party = Party;
