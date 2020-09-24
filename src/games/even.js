import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (n) => n % 2;

const generateQuestionAndAnswer = () => {
  const question = Math.floor(Math.random() * Math.floor(50));
  const answer = isEven(question) ? 'no' : 'yes';
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
