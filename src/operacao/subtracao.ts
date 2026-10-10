import { Operacao } from './operacao'

export class Subtracao extends Operacao {
    resolver(): number { return this.n1 - this.n2}
    getNome(): string { return 'Subtração' }
}