"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Weapon_1 = require("./Weapon");
const Spell_1 = require("./Spell");
const Warrior_1 = require("./Warrior");
const Mage_1 = require("./Mage");
const Party_1 = require("./Party");
//Weapon creation
const weapon1 = new Weapon_1.Weapon("Soulreaver Blade", 22);
const weapon2 = new Weapon_1.Weapon("Ironclaw", 20);
//Spell creation
const spell1 = new Spell_1.Spell("Soulfire", 30, 12);
const spell2 = new Spell_1.Spell("Meteor Rain", 45, 15);
//Character creation
const warrior1 = new Warrior_1.Warrior("Vellyan", 200, 3500, 200, weapon1);
const warrior2 = new Warrior_1.Warrior("Goultard", 199, 3900, 150, weapon2);
const mage1 = new Mage_1.Mage("Zerath", 198, 3300, 100, spell1);
const mage2 = new Mage_1.Mage("Elyx", 180, 2900, 95, spell2);
//Party creation
const party1 = new Party_1.Party("The Goblin Hunters");
//Adding members to the group
party1.addMember(warrior1);
party1.addMember(warrior2);
party1.addMember(mage1);
party1.addMember(mage2);
//Displaying group members
party1.showMembers();
//Display character information
warrior1.showInfo();
warrior2.showInfo();
mage1.showInfo();
mage2.showInfo();
//Make the Warriors attack
warrior1.attack();
warrior2.attack();
//Make the Mages cast their spells
//Demonstrate mana consumption
mage1.castSpell();
mage1.castSpell();
mage2.castSpell();
mage2.castSpell();
//Deal damage to at least one character
warrior1.takeDamage(50);
warrior1.showInfo();
//Change an attribute using a setter
mage1.setName("Khaelyx");
//Remove a character from the party
party1.removeMember(warrior1);
party1.showMembers();
