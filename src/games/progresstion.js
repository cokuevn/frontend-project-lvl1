import readlineSync from 'readline-sync';
import { getRandomInt } from '../getRandomNum.js';

const descriptionGame = 'What number is missing in the progression?';
const progressionLength = 10;
const getProgression = (start, diff, length) => {
  let progression = [];
  for (let i = 0; i < length; i += 1) {
    progression = [...progression, start + diff * i];
  }

  return progression;
};

export const progressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const showName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${showName}!`);
  console.log(descriptionGame);

  const roundsCount = 3;
  for (let i = 0; i !== roundsCount; i += 1) {
    const start = getRandomInt();
    const diff = getRandomInt(1, 9);
    const secretNum = getRandomInt(0, progressionLength);
    const progression = getProgression(start, diff, progressionLength);
    const correctAnswer = `${progression.splice(secretNum, 1, '..')}`;
    const question = `${progression.join(' ')}`;

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
