import { playGame, generateRandomNumber } from '../index.js';

const rule = 'What is the result of the expression?';
const operands = ['+', '-', '*'];

const getAnswer = (number1, number2, operand) => {
  const err = 'Unknown operand type';
  switch (operand) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw err;
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = generateRandomNumber(5);
  const number2 = generateRandomNumber(5);
  const randomNumber = generateRandomNumber(3);
  const operand = operands[randomNumber];
  const question = `${number1} ${operand} ${number2}`;
  const answer = getAnswer(number1, number2, operand).toString();
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
