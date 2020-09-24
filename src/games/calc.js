import playGame from '../index.js';

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
      throw 'Unknown operand type';
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = Math.floor(Math.random() * Math.floor(5));
  const number2 = Math.floor(Math.random() * Math.floor(5));
  const randomNumber = Math.floor(Math.random() * Math.floor(3));
  const operand = operands[randomNumber];
  const question = `${number1} ${operand} ${number2}`;
  const answer = getAnswer(number1, number2, operand).toString();
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
