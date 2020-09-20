const MAX_VALUE = 20;
const RULES = 'Answer \x1b[31m"yes"\x1b[37m \x1b[1mif\x1b[0m given number is prime, otherwise answer \x1b[31m"no"\x1b[0m';

const getRules = () => RULES;

const createQuestion = () => 2 + Math.floor(Math.random() * Math.floor(MAX_VALUE - 2));

const getAnswer = (n) => {
  for (let i = 2; i <= n / 2; i += 1) if (n % i === 0) return 'no';
  return 'yes';
};

const generateQA = () => {
  const question = createQuestion();
  const answer = getAnswer(question);
  return [question, answer];
};

export default [getRules, generateQA];
