import { Animal } from "./Animal";

export class Bird extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  fly(): void {
    console.log(`${this.nome} está voando!`);
  }
}