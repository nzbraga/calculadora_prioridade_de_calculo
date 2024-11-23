import calculate from "./func/service/calculate.js";


const inputElement = document.querySelector('.operationInput');
const buttonElement = document.querySelector('.btnCalculate');
const resultElement = document.getElementById('result');

// Função de cálculo
function calc(input) {
  let result;
  try {
    // Calcula o valor da expressão
    //let operationInput = prompt("Qual cálculo deseja fazer?");

    
    result = calculate(input);
    // Exibe o resultado no formato desejado
    resultElement.innerText = `O resultado de ${input} é: ${result}`;
  } catch (error) {
    // Exibe uma mensagem de erro se a expressão for inválida
    resultElement.innerText = 'Expressão inválida';
    console.log(`Entrada: ${input}, Erro: ${error}`);
  }
}

// Adiciona o evento de clique ao botão
buttonElement.addEventListener('click', () => {
  // Obtém o valor do input
  const inputValue = inputElement.value;
  // Chama a função de cálculo com o valor do input
  calc(inputValue);
});