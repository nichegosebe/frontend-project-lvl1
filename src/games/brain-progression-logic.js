const MAX_START_VALUE = 10;
const MAX_ITEMS = 10;
const MAX_STEP = 10;

const RULES = 'What number is missing in the progression?';

const getRules = () => RULES;

const generateQA = () => {
  const startValue = Math.floor(Math.random() * Math.floor(MAX_START_VALUE));
  const step = 2 + Math.floor(Math.random() * Math.floor(MAX_STEP - 2));
  const positionOfSecret = Math.floor(Math.random() * Math.floor(MAX_ITEMS));

  const progression = [];
  for (let i = 0; i < MAX_ITEMS; i += 1) {
    const value = i === positionOfSecret ? '..' : startValue + step * i;
    progression.push(value);
  }
  const question = progression.join(' ');

  const answer = (startValue + step * positionOfSecret).toString();

  return [question, answer];
};

export { getRules, generateQA };
