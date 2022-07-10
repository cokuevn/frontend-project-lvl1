import { getRandomInt } from '../getRandomNum.js';
import gameRun from '../index.js';

const isEven = (n) => n % 2 === 0;

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCresteTask = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export const start = () => gameRun(getCresteTask, descriptionGame);
