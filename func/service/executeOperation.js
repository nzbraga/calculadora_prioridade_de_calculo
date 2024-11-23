import makeNumber from "./makeNumbers.js";

function executeOperation(calc, operationFn, i) {
    
    let less = Number(i)
    let plus = Number(i)    
    
    less = less - 1
    plus = plus + 1
        
    const result = operationFn(calc[less], calc[plus]);
    calc[less] = Number(result);
    calc[i] = '';
    calc[plus] = '';
    calc = makeNumber(calc.join(''));
    return calc;
}

export default executeOperation