import { playGame } from '../index.js';
import { generateRandomNumber } from '../utils';

const rule = 'What is the result of the expression?';
const operands = ['+', '-', '*'];

const getAnswer = (number1, number2, operand) => {
  switch (operand) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operand type');
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = generateRandomNumber(0, 5);
  const number2 = generateRandomNumber(0, 5);
  const randomOperandIndex = generateRandomNumber(0, 3);
  const operand = operands[randomOperandIndex];
  const question = `${number1} ${operand} ${number2}`;
  const answer = getAnswer(number1, number2, operand).toString();
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
