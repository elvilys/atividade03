let MultiploDe3 = ""
let MultiploDe5 = ""

for (let i = 1; i <= 250; i++) {
    let MultiploDe3 = i % 3 === 0;
    let MultiploDe5 = i % 5 === 0;
  
    
    if (MultiploDe3) {
      document.write(`${i} é múltiplo de 3<br><br>`);
    } else if (MultiploDe5) {
      document.write(`${i} é múltiplo de 5<br> <br>`);
    }
  }
  