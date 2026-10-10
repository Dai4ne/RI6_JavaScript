import * as readline from "node:readline/promises"
import { stdin, stdout } from "node:process"

import { Calculavel } from "./operacao/Calculavel"
import { Soma } from "./operacao/Soma"
import { Subtracao } from "./operacao/Subtracao"
import { Divisao } from "./operacao/Divisao"
import { Potencia } from "./operacao/Potencia"
import { Radiciacao } from "./operacao/Radiciacao"
import { Bhaskara } from "./operacao/Bhaskara"

const rl = readline.createInterface({ input: stdin, output: stdout })

async function lerNumero(pergunta: string): Promise<number> {
    return Number(await rl.question(pergunta));
}

async function main() {
    while (true) {
        console.log("\n1-Soma 2-Subtração 3-Divisão 4-Potência 5-Raiz 6-Bhaskara 0-Sair")
        const opcao = await rl.question("Opção: ")

        if (opcao === "0") break

        if (opcao === "7") {
            console.log(";)");
            continue;
        }

        let calculo: Calculavel

        if (opcao === "6") {
            calculo = new Bhaskara(
                await lerNumero("a: "),
                await lerNumero("b: "),
                await lerNumero("c: ")
        )} 

        
        else {
            const classes: Record<string, new (a: number, b: number) => Calculavel> = {
            "1": Soma, "2": Subtracao, "3": Divisao, "4": Potencia, "5": Radiciacao,
            }

            const Classe = classes[opcao];
            if (!Classe) {
                console.log("Opção inválida.")
                continue
            }
            calculo = new Classe(await lerNumero("Número 1: "), await lerNumero("Número 2: "))
        }

        try { console.log(`${calculo.getNome()}: ${calculo.calcular()}`) } 
    
        catch (erro) { console.log(`Erro: ${(erro as Error).message}`) }
    }

    rl.close();
}

main()