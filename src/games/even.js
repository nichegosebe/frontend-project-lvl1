import { playGame, generateRandomNumber } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (n) => n % 2;

const generateQuestionAndAnswer = () => {
  const question = generateRandomNumber(50);
  const answer = isEven(question) ? 'no' : 'yes';
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
