import { Operacao } from './operacao'

export class Divisao extends Operacao{
    resolver(): number {
        if (this.n2 === 0){ throw new Error ('Dividir um número por 0 não é possível')}
        
        return this.n1 / this.n2}

    getNome(): string {return 'Divisão'}
}