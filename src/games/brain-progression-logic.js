const MAX_START_VALUE = 10;
const MAX_ITEMS = 10;
const MAX_STEP = 10;
const RULES = 'What number is missing in the progression?';

const getRules = () => RULES;

const createQuestion = (startValue, step, positionOfSecret) => {
  const progression = [];
  for (let i = 0; i < MAX_ITEMS; i += 1) {
    const value = i === positionOfSecret ? '..' : startValue + step * i;
    progression.push(value);
  }
  return progression.join(' ');
};

const getAnswer = (startVal, step, posOfSecret) => (startVal + step * posOfSecret).toString();

const generateQA = () => {
  const startValue = Math.floor(Math.random() * Math.floor(MAX_START_VALUE));
  const step = 2 + Math.floor(Math.random() * Math.floor(MAX_STEP - 2));
  const posOfSecret = Math.floor(Math.random() * Math.floor(MAX_ITEMS));

  const question = createQuestion(startValue, step, posOfSecret);
  const answer = getAnswer(startValue, step, posOfSecret);
  return [question, answer];
};

export default [getRules, generateQA];
