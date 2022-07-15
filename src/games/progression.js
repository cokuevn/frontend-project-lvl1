import gameRun from '../index.js';
import getRandomInt from '../getRandomNum.js';

const descriptionGame = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const maxNumber = 10;

const getProgression = (start, diff, length) => {
  let progression = [];
  for (let i = 0; i < length; i += 1) {
    progression = [...progression, start + diff * i];
  }

  return progression;
};

const getRoundData = () => {
  const start = getRandomInt(1, maxNumber);
  const diff = getRandomInt(1, maxNumber);
  const secretNum = getRandomInt(0, lengthOfProgression - 1);
  const progression = getProgression(start, diff, lengthOfProgression);
  const correctAnswer = `${progression.splice(secretNum, 1, '..')}`;
  const question = `${progression.join(' ')}`;

  return [question, correctAnswer];
};

const startProgressionGame = () => gameRun(descriptionGame, getRoundData);

export default startProgressionGame;
