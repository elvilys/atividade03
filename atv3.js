
let multiplicando = parseInt(prompt("Digite o número para a tabuada:"));
let iteracoes = parseInt(prompt("Digite a quantidade de iterações:"));


if ( !isNaN(multiplicando) && !isNaN(iteracoes)) {
  
  document.write(`<h2>Tabuada do ${multiplicando}</h2>`);

  
  for (var i = 1; i <= iteracoes; i++) {
    var resultado = multiplicando * i;
    document.write(`${multiplicando} x ${i} = ${resultado}<br>`);
  }
} else {
  document.write("Valores inválidos. Por favor, insira apenas números.");
}