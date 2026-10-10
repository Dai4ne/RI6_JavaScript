import { Operacao } from "./operacao"

export class Radiciacao extends Operacao {
  resolver(): number {
    if (this.n1 < 0) {
      throw new Error("Não existe raiz de número negativo.");
    }
    return this.n1 ** (1 / this.n2);
  }

  getNome(): string {return "Radiciação" }
}