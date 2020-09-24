import { playGame, generateRandomNumber } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers';

const getGCD = (n1, n2) => {
  if (n2 > n1) return getGCD(n2, n1);
  if (n1 % n2 === 0) return n2.toString();
  return getGCD(n2, n1 % n2);
};

const generateQuestionAndAnswer = () => {
  const number1 = 1 + generateRandomNumber(19);
  const number2 = 1 + generateRandomNumber(19);
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2).toString();
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
