import gameRun from '../index.js';
import { getRandomInt } from '../getRandomNum.js';

const descriptionGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const getCresteTask = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const correctAnswer = calculate(num1, num2, operator);
  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer];
};

export const start = () => gameRun(getCresteTask, descriptionGame);
