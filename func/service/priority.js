import multiplicacao from "../operacao/multiplicacao.js"
import divisao from "../operacao/divisao.js"
import porcento from "../operacao/porcento.js"

import soma from "../operacao/soma.js"
import subtracao from "../operacao/subtracao.js"

import filtersTypePriority from "./filtersTypePriority.js"
import makeNumber from "./makeNumbers.js"

function priority(calc) {

    while (calc.length > 1) {

        for (let i in calc) {
        if (filtersTypePriority) {

            console.log('teste', calc[i])
            let less = Number(i)
            let plus = Number(i)
            let result
            
            less = less - 1
            plus = plus + 1
            
            switch (calc[i]) {
                case '*':
                    console.log('teste mult', calc[i])
                    result = multiplicacao(calc[less], calc[plus])
                    calc[less] = Number(result)
                    calc[i] = ''
                    calc[plus] = ''
                    calc = (calc.join(''))
                    calc = makeNumber(calc)
                    break
                    case '/':                    
                    result = divisao(calc[less], calc[plus])
                    calc[less] = Number(result)
                    calc[i] = ''
                    calc[plus] = ''
                    calc = (calc.join(''))
                    console.log('teste pre make div', calc)
                    calc = makeNumber(calc)
                    console.log('teste div', calc)
                    break
                case '%':
                    result = porcento(calc[less], calc[plus])
                    console.log("%", calc)
                    calc[less] = Number(result)
                    calc[i] = ''
                    calc[plus] = ''
                    calc = (calc.join(''))
                    calc = makeNumber(calc)
                    break
            }


        }



        }     

        
        for (let i in calc) {
            if (calc[i] === '+' || calc[i] === '-') {
    
                let less = Number(i)
                let plus = Number(i)
                let result
    
                less = less - 1
                plus = plus + 1
    
                switch (calc[i]) {
                    case '+':
                        result = soma(calc[less], calc[plus])
                        calc[less] = Number(result)
                        calc[i] = ''
                        calc[plus] = ''
                        calc = (calc.join(''))
                        calc = makeNumber(calc)
    
                        break
                    case '-':
                        result = subtracao(calc[less], calc[plus])
                        calc[less] = Number(result)
                        calc[i] = ''
                        calc[plus] = ''
                        calc = (calc.join(''))
                        calc = makeNumber(calc)
                        break
    
                }
    
    
            }
    
            if (calc.length === 1) {
                console.log('calc  >>', calc)
                let res = Number(calc)
                console.log('res  >>', res)
            }
    
        }
    }
   
}

export default priority