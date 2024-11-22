import priority from "./priority.js"
import makeNumber from "./makeNumbers.js"

function calculate(operationInput) {

    let calc = makeNumber(operationInput)

    return priority(calc)
}

export default calculate