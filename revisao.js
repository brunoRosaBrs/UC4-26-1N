const ask = require('readline-sync');

/*
// 1. Peça o nome e idade do usuário e mostre uma mensagem personalizada.
let nome = ask.question('What is your name? ');
let idade = ask.question('How old are you? ');
console.log(`The name entered was ${nome}, and the age was ${idade}`);
*/

// 2. Solicite dois números e mostre a soma, subtração, multiplicação e divisão.

/*
let number1 = Number(ask.question('Enter the first number to perform the operations: '));
let number2 = Number(ask.question('Enter the second number to perform the operations: '));
console.log(`
    Sum: ${number1 + number2},
    Subtraction: ${number1 - number2},
    Multiplication: ${number1 * number2},
    Division: ${number1 / number2}
    `);
*/


// 3. Peça uma nota e exiba “Aprovado” ou “Reprovado” usando operador ternário.
/*
let grade = Number(ask.question('Enter the grade you received: '))
const result = grade >= 7 ? "Approved" : "Failed";
console.log(result);
*/


// 4. Verifique se um número é par ou ímpar usando if/else.
/*
let number = Number(ask.question(`Enter a number to check if it is odd or even: `));
if (number % 2 === 0) {
    console.log(`This number is even`);
} else {
    console.log(`This number is odd`);
};
*/


// 5. Peça o dia da semana (1-7) e use switch para mostrar o nome do dia.
/*
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


// 6. Crie um mini-cardápio e use switch para mostrar o preço do item escolhido.
/*
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

// 7. Crie um array de 5 números e calcule a soma usando for.
/*
let numbers = [1, 3, 4, 7, 8];
let sum = 0
for (let i = 0; i < 5; i++) {
    sum = sum + numbers[i];
}
console.log(sum);
*/


// 8. Faça um loop while que exiba números de 1 a 10.
/*
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}
*/

// 9. Use for...of para imprimir todos os elementos de um array de frutas.
/*
const fruits = ["apple", "banana", "orange", "pineapple"];
for (const fruit of fruits) console.log(fruit);
*/

// 10. Use um laço for tradicional para percorrer um array de frutas e imprimir cada elemento no console.

