/* Autor: Matheus Debtil Souza*/
const num = 55;

const fibonacci = [0, 1];

while (fibonacci[fibonacci.length - 1] < num) {
  const nextFibonacci = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(nextFibonacci);
}

if (fibonacci.includes(num)) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}
