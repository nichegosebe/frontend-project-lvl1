const MAX_VALUE = 50;

const RULES =
  'Answer \x1b[31m"yes"\x1b[37m \x1b[1mif\x1b[0m the number is even, otherwise answer \x1b[31m"no"\x1b[0m';

const getRules = () => RULES;

const generateQA = () => {
  const question = Math.floor(Math.random() * Math.floor(MAX_VALUE));
  const answer = question % 2 ? 'no' : 'yes';
  return [question, answer];
};

export { getRules, generateQA };
