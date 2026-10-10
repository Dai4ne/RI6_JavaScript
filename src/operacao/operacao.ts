import {Calculavel} from './calculavel'

//molde das operações
export abstract class Operacao extends Calculavel {
    protected n1: number
    protected n2: number

    constructor(n1: number, n2: number) {
        super()
        this.n1 = n1
        this.n2 = n2
    }

    abstract resolver(): number

    calcular(): string { return String(this.resolver()); }
}