import priority from "./func/service/calculate.js";

try {
    let operationInput = prompt("Qual cálculo deseja fazer?");
    
    priority(operationInput);
} catch (error) {
    console.log(`Entrada: ${operationInput}, Erro: ${error}`);
}