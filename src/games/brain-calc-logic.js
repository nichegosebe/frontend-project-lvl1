const MAX_VALUE = 5;

const RULES = 'What is the result of the expression?';

const getRules = () => RULES;

const getOperand = () => {
  const randomNumber = Math.floor(Math.random() * Math.floor(3));
  switch (randomNumber) {
    case 0:
      return '+';
    case 1:
      return '-';
    default:
      return '*';
  }
};

const calculateAnswer = (val1, val2, operand) => {
  switch (operand) {
    case '+':
      return (val1 + val2).toString();
    case '-':
      return (val1 - val2).toString();
    case '*':
      return (val1 * val2).toString();
    default:
      return '';
  }
};

const generateQA = () => {
  const val1 = Math.floor(Math.random() * Math.floor(MAX_VALUE));
  const val2 = Math.floor(Math.random() * Math.floor(MAX_VALUE));
  const operand = getOperand();

  const question = `${val1} ${operand} ${val2}`;
  const answer = calculateAnswer(val1, val2, operand);

  return [question, answer];
};

export { getRules, generateQA };
