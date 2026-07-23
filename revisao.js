const ask = require('readline-sync');

/*
// 1. Peça o nome e idade do usuário e mostre uma mensagem personalizada.

let nome = ask.question('What is your name? ');
let idade = ask.question('How old are you? ');
console.log(`The name entered was ${nome}, and the age was ${idade}`);
*/


/*
// 2. Solicite dois números e mostre a soma, subtração, multiplicação e divisão.

let number1 = Number(ask.question('Enter the first number to perform the operations: '));
let number2 = Number(ask.question('Enter the second number to perform the operations: '));
console.log(`
    Sum: ${number1 + number2},
    Subtraction: ${number1 - number2},
    Multiplication: ${number1 * number2},
    Division: ${number1 / number2}
    `);
*/


/*
// 3. Peça uma nota e exiba “Aprovado” ou “Reprovado” usando operador ternário.

let grade = Number(ask.question('Enter the grade you received: '))
const result = grade >= 7 ? "Approved" : "Failed";
console.log(result);
*/


/*
// 4. Verifique se um número é par ou ímpar usando if/else.

let number = Number(ask.question(`Enter a number to check if it is odd or even: `));
if (number % 2 === 0) {
    console.log(`This number is even`);
} else {
    console.log(`This number is odd`);
};
*/


/*
// 5. Peça o dia da semana (1-7) e use switch para mostrar o nome do dia.

let entededDay = Number(ask.question(`Enter a day of the week from 1 to 7: `));
switch (entededDay) {
    case 1:
        console.log('Sunday');
        break;
    case 2: 
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        break;
}
*/


/*
// 6. Crie um mini-cardápio e use switch para mostrar o preço do item escolhido.

let menu = Number(ask.question(`
--------MENU---------
1 - hotdog
2 - pizza
3 - sushi 
4 - barbicue

Enter the number of the chosen option to see the price:  `));
switch (menu) {
    case 1:
        console.log(`$10.00`);
        break;
    case 2: 
        console.log(`$20.00`);
        break;
    case 3:
        console.log(`$25.00`);
        break;
    case 4:
        console.log(`$50.00`);
        break
    default:
        break;
};
*/


/*
// 7. Crie um array de 5 números e calcule a soma usando for.

let numbers = [1, 3, 4, 7, 8];
let sum = 0
for (let i = 0; i < 5; i++) {
    sum = sum + numbers[i];
}
console.log(sum);
*/


/*
// 8. Faça um loop while que exiba números de 1 a 10.

let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}
*/


/*
// 9. Use for...of para imprimir todos os elementos de um array de frutas.

const fruits = ["apple", "banana", "orange", "pineapple"];
for (const fruit of fruits) console.log(fruit);
*/


/*
//10. Use um laço for tradicional para percorrer um array de frutas e imprimir cada elemento no console.

const fruits = ["apple", "banana", "orange", "pineapple"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
*/


/*
// 11. Crie um objeto pessoa com nome e idade e use for...in para imprimir cada propriedade.

const pessoa = {
    nome: "Bruno",
    idade: 29 };
for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
*/


/*
// 12. Faça um loop que exiba todos os números pares de 0 a 20.
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/


/*
// 13. Crie uma função tradicional que receba 2 números e retorne o maior.

function largerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
    
}

let num1 = Number(ask.question(`Enter the first number: `));
let num2 = Number(ask.question(`Enter the second number: `));

const result = largerNumber(num1, num2);
console.log(`The largest number is: ${result}`);
*/


/*
// 14. Crie uma função que receba um array de números e retorne a soma de todos os numeros primos.

function sumPrimes(numbers) {
  let sum = 0;

  for (let number of numbers) {
    let isPrime = true;

    if (number < 2) {
      isPrime = false;
    }

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += number;
    }
  }

  return sum;
}

let numbers = [2, 3, 4, 5, 6, 7, 8, 11];

console.log(sumPrimes(numbers));
*/


/*
// 15. Crie uma função que peça ao usuário seu nome e idade (usando readline-sync) e exiba uma saudação personalizada.

function greeting() {
  let name = ask.question("Enter your name: ");
  let age = Number(ask.question("Enter your age: "));
  console.log("Hello, " + name + "! You are " + age + " years old.");
}

greeting();
*/




