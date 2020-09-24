import { playGame, generateRandomNumber } from '../index.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (start, size, step) => {
  const progression = [start];
  for (let i = 1; i < size; i += 1) progression.push(progression[i - 1] + step);
  return progression;
};

const generateQuestionAndAnswer = () => {
  const startNumber = generateRandomNumber(10);
  const step = 2 + generateRandomNumber(8);
  const question = generateProgression(startNumber, 10, step);
  const randomPosition = generateRandomNumber(9);
  question[randomPosition] = '..';
  const answer = (startNumber + step * randomPosition).toString();
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
