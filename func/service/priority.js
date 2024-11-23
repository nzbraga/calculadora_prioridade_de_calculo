import multiplicacao from "../operacao/multiplicacao.js"
import divisao from "../operacao/divisao.js"
import porcento from "../operacao/porcento.js"

import soma from "../operacao/soma.js"
import subtracao from "../operacao/subtracao.js"

import executeOperation from "./executeOperation.js"
import filtersTypePriority from "./filtersTypePriority.js"


function priority(calc) {

    while (calc.length > 1) {

        let check = ["*", "/", "%"]

        if (calc.some(e => check.includes(e))) {
            for (let i in calc) {
                if (filtersTypePriority) {

                    switch (calc[i]) {
                        case '*':
                            calc = executeOperation(calc, multiplicacao, i);
                            break;
                        case '/':
                            calc = executeOperation(calc, divisao, i);
                            break;
                        case '%':
                            calc = executeOperation(calc, porcento, i);
                            break;
                    }
                }
            }


        } else {
            for (let i in calc) {
                if (calc[i] === '+' || calc[i] === '-') {

                    let less = Number(i)
                    let plus = Number(i)
                    let result

                    less = less - 1
                    plus = plus + 1

                    switch (calc[i]) {
                        case '+':
                            calc = executeOperation(calc, soma, i);
                            break;
                        case '-':
                            calc = executeOperation(calc, subtracao, i);
                            break;
                    }
                }

            }



        }




    }
    console.log(">>>", calc)
    return calc
}

export default priority