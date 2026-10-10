import { Operacao } from './operacao'

export class Potencia extends Operacao {
    resolver(): number { return this.n1 ** this.n2 }
    getNome(): string { return 'Potência'}
}