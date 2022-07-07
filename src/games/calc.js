import readlineSync from 'readline-sync';
import { getRandomInt } from '../getRandomNum.js';

const descriptionGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

export const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const showName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${showName}!`);
  console.log(descriptionGame);

  const roundsCount = 3;
  for (let i = 0; i !== roundsCount; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const correctAnswer = `${calculate(num1, num2, operator)}`;
    const question = `${num1} ${operator} ${num2}`;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${showName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${showName}!`);
};
