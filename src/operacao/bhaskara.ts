import { Calculavel } from "./calculavel"

export class Bhaskara extends Calculavel {
  private a: number
  private b: number
  private c: number

  constructor(a: number, b: number, c: number) {
    super();
    this.a = a
    this.b = b
    this.c = c
  }

  private calcularDelta(): number {
    return this.b ** 2 - 4 * this.a * this.c
  }

  calcular(): string {
    if (this.a === 0) {
      throw new Error("O valor de 'a' não pode ser zero")
    }

    const delta = this.calcularDelta()

    if (delta < 0) {
      return `Delta = ${delta} Não existem raízes reais`
    }

    if (delta === 0) {
      const x = -this.b / (2 * this.a);
      return `Delta = 0. Raiz única: x = ${x}`
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = (-this.b + raizDelta) / (2 * this.a)
    const x2 = (-this.b - raizDelta) / (2 * this.a)
    return `Delta = ${delta}. x1 = ${x1} e x2 = ${x2}`
  }

  getNome(): string {
    return "Bhaskara"
  }
}