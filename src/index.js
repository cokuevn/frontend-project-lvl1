import readlineSync from 'readline-sync';
import { getRandomInt } from './getRandomNum.js';

const gameRun = () => {
  console.log('Welcome to the Brain Games!');
  const showName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${showName}!`);
  console.log(descriptionGame);

  const roundsCount = 3;
  for (let i = 0; i !== roundsCount; i += 1) {
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
