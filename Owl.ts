import { Bird } from "./Bird";

export class Owl extends Bird {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  hunt(): void {
    console.log(`${this.nome} começou a caçar...`);
  }
}