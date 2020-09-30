import { playGame } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers';

const getGCD = (n1, n2) => {
  if (n2 === 0) {
    return n1;
  }
  return getGCD(n2, n1 % n2);
};

const generateQuestionAndAnswer = () => {
  const number1 = generateRandomNumber(0, 20);
  const number2 = generateRandomNumber(0, 20);
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2).toString();
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
