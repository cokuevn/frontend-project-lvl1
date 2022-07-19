import gameRun from '../index.js';
import getRandomInt from '../getRandomNum.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => (num2 === 0 ? num1 : calculateGcd(num2, num1 % num2));

const getRoundData = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const correctAnswer = `${calculateGcd(num1, num2)}`;
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const startGcdGame = () => gameRun(descriptionGame, getRoundData);

export default startGcdGame;
