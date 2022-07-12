import gameRun from '../index.js';
import getRandomInt from '../getRandomNum.js';

const descriptionGame = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, diff, length) => {
  let progression = [];
  for (let i = 0; i < length; i += 1) {
    progression = [...progression, start + diff * i];
  }
  return progression;
};

const getTaskData = () => {
  const start = getRandomInt();
  const diff = getRandomInt(1, 9);
  const secretNum = getRandomInt(0, progressionLength);
  const progression = getProgression(start, diff, progressionLength);
  const correctAnswer = `${progression.splice(secretNum, 1, '..')}`;
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};

const startProgressionGame = () => gameRun(descriptionGame, getTaskData);

export default startProgressionGame;
