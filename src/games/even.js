import { playGame } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (n) => n % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = generateRandomNumber(0, 50);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
