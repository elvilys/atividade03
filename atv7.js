
let soma = 0;
let numPositivos = 0;
let numNegativos = 0;


for (let i = 1; i <= 10; i++) {
  
  let numero = parseFloat(prompt(`Digite o número ${i}:`));

  
  if (numero > 1) {
    numPositivos++;
  } else if (numero < 0) {
    numNegativosNegativos++;
  }

  
  soma += numero;
}


let media = soma / 10;
let percentualPositivos = (numPositivos / 10) * 100;
let percentualNegativos = (numNegativos / 10) * 100;


document.write(`Média Aritmética: ${media}<br><br>`);
document.write(`Quantidade de Valores Positivos: ${numPositivos} <br><br>`);
document.write(`Quantidade de Valores Negativos: ${numNegativos}<br><br>`);
document.write(`Percentual de Valores Positivos: ${percentualPositivos}%<br><br>`);
document.write(`Percentual de Valores Negativos: ${percentualNegativos}%<br><br>`);