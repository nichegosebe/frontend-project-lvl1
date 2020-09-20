const MAX_VALUE = 20;

const RULES = 'Find the greatest common divisor of given numbers';

const getRules = () => RULES;

const calculateAnswer = (val1, val2) => {
  if (val2 > val1) return calculateAnswer(val2, val1);
  if (val1 % val2 === 0) return val2;
  return calculateAnswer(val2, val1 % val2);
};

const generateQA = () => {
  const val1 = 1 + Math.floor(Math.random() * Math.floor(MAX_VALUE - 1));
  const val2 = 1 + Math.floor(Math.random() * Math.floor(MAX_VALUE - 1));
  const question = `${val1} ${val2}`;

  const answer = calculateAnswer(val1, val2).toString();

  return [question, answer];
};

export { getRules, generateQA };
