let maiorAltura= 0;
let menorAltura = 0;
let altura ="0"

for (let i= 1; i <=15; i++ ){
    let altura = (prompt( `Digite a altura ${i} em (metros):`));


if (altura <= menorAltura) {
    menorAltura = altura;
} else {
        (altura >= maiorAltura) 
     maiorAltura = altura;
    
}
}document.write(`A menor Altura do grupo é: ${menorAltura} metros<br>`);
document.write(`A maior Altura do grupo é: ${maiorAltura }metros<br>`);
