import { playGame } from '../index.js';
import { generateRandomNumber } from '../utils';

const rule = 'Answer "yes" if given number is prime, otherwise answer "no"';

const isPrime = (n) => {
  if (n <= 1) return true;
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const question = generateRandomNumber(0, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
