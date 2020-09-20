const MAX_VALUE = 20;

const RULES = 'Find the greatest common divisor of given numbers';

const getRules = () => RULES;

const createQuestion = (val1, val2) => `${val1} ${val2}`;

const getAnswer = (val1, val2) => {
  if (val2 > val1) return getAnswer(val2, val1);
  if (val1 % val2 === 0) return val2.toString();
  return getAnswer(val2, val1 % val2);
};

const generateQA = () => {
  const val1 = 1 + Math.floor(Math.random() * Math.floor(MAX_VALUE - 1));
  const val2 = 1 + Math.floor(Math.random() * Math.floor(MAX_VALUE - 1));

  const question = createQuestion(val1, val2);
  const answer = getAnswer(val1, val2);
  return [question, answer];
};

export default [getRules, generateQA];
