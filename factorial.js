function factorial() {
  let num = prompt("Introduce un número:");
  
  while (isNaN(num) || num < 0) {
    num = prompt("Introduce un número válido:");
  }
  
  let fact = 1;
  
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  
  console.log(`El factorial de ${num} es: ${fact}`);
}

factorial();