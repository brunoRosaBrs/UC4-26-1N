import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Owl } from "./Owl";
import { Crocodile } from "./Crocodile";

// 1. Instanciando os objetos (Dog, Owl e Crocodile)
const dog = new Dog("Rex", 5, true);
const owl = new Owl("Coruja Maldita", 2);
const croco = new Crocodile("Sequelado", 10, "Escudos dorsais");
console.log(`Teste exercicio 1: `)
croco.swim();

// 2. Criando o array do tipo Animal[] com as instâncias
const animais: Animal[] = [];
animais.push(dog);
animais.push(owl);
animais.push(croco);

// 3. Percorrendo o array e chamando o método eat() de cada um
animais.forEach((animal) => {
  animal.eat();
});