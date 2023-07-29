
function isPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
  
    if (numero % 2 === 0 || numero % 3 === 0) return false;
  
    let divisor = 5;
    while (divisor * divisor <= numero) {
      if (numero % divisor === 0 || numero % (divisor + 2) === 0) return false;
      divisor += 6;
    }
  
    return true;
  }
  
  
  for (let i = 30; i >= 1; i--) {
    if (isPrimo(i)) {
      document.write(`[${i}] `);
    } else {
      document.write(`${i} `);
    }
  }