import gameRun from '../index.js';
import getRandomInt from '../getRandomNum.js';

const descriptionGame = 'What is the result of the expression?';

const operators = '+-*';

const maxNumber = 50;

const calculateExpression = (x, y, operator) => {
  switch (operator) {
    case '*':
      return x * y;
    case '+':
      return x + y;
    case '-':
      return x - y;
    default:
      throw new Error('error');
  }
};

const getRoundData = () => {
  const num1 = getRandomInt(1, maxNumber);
  const num2 = getRandomInt(1, maxNumber);
  const operation = operators.charAt(getRandomInt(0, operators.length - 1));
  const correctAnswer = String(calculateExpression(num1, num2, operation));
  const question = `${num1} ${operation} ${num2}`;
  return [question, correctAnswer];
};

const startCalcGame = () => gameRun(descriptionGame, getRoundData);

export default startCalcGame;
