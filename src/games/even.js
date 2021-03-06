import gameRun from '../index.js';
import getRandomInt from '../getRandomNum.js';

const isEven = (num) => num % 2 === 0;

const maxNumber = 100;

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const question = getRandomInt(0, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => gameRun(descriptionGame, getRoundData);

export default startEvenGame;
