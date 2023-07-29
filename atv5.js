
let numero = parseInt(prompt("Digite um valor:"));


if (numero && numero >= 0) {
  
  let contagem = "Contagem: ";
  for (let i = 0; i <= numero; i++) {
    contagem += i;
    if (i !== numero) {
      contagem += ", ";
    }
  }
  contagem += ", FIM!";
  
  
  document.write(contagem);
} else {
  document.write("Valor inválido. Por favor, digite um número.");
}