import gameRun from '../index.js';
import getRandomInt from '../getRandomNum.js';

const descriptionGame = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const getProgression = (start, diff, length, ind) => {
  const filledArray = Array.apply(0, Array(length)).map(() => (start));
  const arrayWithProgression = filledArray.map((el, index) => {
    const result = el + diff * index;
    return index === ind ? '..' : result;
  }, 1);
  return arrayWithProgression.join(' ');
};

const getTaskData = () => {
  const start = getRandomInt();
  const diff = getRandomInt(1, 10);
  const indexOfHiddenValue = getRandomInt(0, lengthOfProgression - 1);
  const question = getProgression(start, diff, lengthOfProgression, indexOfHiddenValue);
  const answer = `${start + diff * indexOfHiddenValue}`;
  return [question, answer];
};

const startProgressionGame = () => gameRun(descriptionGame, getTaskData);

export default startProgressionGame;
