import { playGame } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operator type');
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = generateRandomNumber(0, 5);
  const number2 = generateRandomNumber(0, 5);
  const randomOperatorIndex = generateRandomNumber(0, operators.length - 1);
  const operator = operators[randomOperatorIndex];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculateExpression(number1, number2, operator).toString();
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
