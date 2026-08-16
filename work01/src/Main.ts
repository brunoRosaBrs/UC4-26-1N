import { Mage } from "./Mage";
import { Party } from "./Party";
import { Spell } from "./Spell";
import { Warrior } from "./Warrior";
import { Weapon } from "./Weapon";

//Weapon creation
const weapon1 = new Weapon("Soulreaver Blade", 22);
const weapon2 = new Weapon("Ironclaw", 20);

//Spell creation
const spell1 = new Spell("Soulfire", 30, 12);
const spell2 = new Spell("Meteor Rain",45, 15 );

//Character creation
const warrior1 = new Warrior("Vellyan", 200, 3500, 200, weapon1);
const warrior2 = new Warrior("Goultard", 199, 3900, 150, weapon2);
const mage1 = new Mage("Zerath", 198, 3300, 100, spell1);
const mage2 = new Mage("Elyx", 180, 2900, 95, spell2);

//Party creation
const party1 = new Party("The Goblin Hunters");

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

//



