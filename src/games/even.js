import readlineSync from 'readline-sync';
import { getRandomInt } from '../getRandomNum.js';

const isEven = (n) => n % 2 === 0;

export const evenGame = () => {
  const showName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${showName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 0; i !== roundsCount; i += 1) {
    const num = getRandomInt();
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
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
