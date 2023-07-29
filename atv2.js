let alturaPedro = 1.50;
let alturaLucas = 1.10;
let crescimentoPedro = 2;
let crescimentoLucas =3;
let anos = 0;

if (alturaLucas <= alturaPedro) {
   alturaPedro += crescimentoPedro;
   alturaLucas += crescimentoLucas;
   anos++; 
} 
document.write(`a. Lucas e Pedro terão o mesmo tamanho em ${anos} anos.<br>`);


if (alturaLucas>= alturaPedro) {
    alturaPedro += crescimentoPedro;
    alturaLucas += crescimentoLucas;
    anos++;
}

document.write(`b. Lucas será maior que Pedro em ${anos} anos.`);