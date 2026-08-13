import { Mamifero } from "./Mamifero";

export class Dog extends Mamifero {
  constructor(nome: string, idade: number, temPelos: boolean = true) {
    super(nome, idade, temPelos);
  }

  bark(): void {
    console.log(`${this.nome} está latindo!`);
  }
}