import filtersOperation from "./filtersOperation.js"


function makeNumber (operationInput){   
    
    let operation = operationInput.match(/(\d*\.?\d+|\+|\-|\%|\*|\/)/g)
2
    for (let i=0; i< operation.length; i++){
       
        if(filtersOperation){ operation[i] = operation[i]}
        else { operation[i] = Number(operation[i]) }    }

    return operation

}

export default makeNumber