import gameRun from '../index.js';
import getRandomInt from '../getRandomNum.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getTaskData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => gameRun(descriptionGame, getTaskData);

export default startPrimeGame;
