import readlineSync from 'readline-sync';
import { getRandomInt } from '../getRandomNum.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => (num2 === 0 ? num1 : calculateGcd(num2, num1 % num2));

export const gcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const showName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${showName}!`);
  console.log(descriptionGame);

  const roundsCount = 3;
  for (let i = 0; i !== roundsCount; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const correctAnswer = `${calculateGcd(num1, num2)}`;
    const question = `${num1} ${num2}`;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${showName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${showName}!`);
};
