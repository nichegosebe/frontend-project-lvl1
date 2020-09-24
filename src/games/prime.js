import { playGame, generateRandomNumber } from '../index.js';

const rule = 'Answer "yes" if given number is prime, otherwise answer "no"';

const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i += 1) if (n % i === 0) return false;
  return true;
};

const generateQuestionAndAnswer = () => {
  const question = 2 + generateRandomNumber(18);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);