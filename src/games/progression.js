import { playGame } from '../index.js';
import { generateRandomNumber } from '../utils';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (start, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * (i + 1));
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const startNumber = generateRandomNumber(0, 10);
  const step = generateRandomNumber(0, 10);
  const question = generateProgression(startNumber, progressionLength, step);
  const randomPosition = generateRandomNumber(0, progressionLength - 1);
  question[randomPosition] = '..';
  const answer = (startNumber + step * randomPosition).toString();
  return [question, answer];
};

export default () => playGame(rule, generateQuestionAndAnswer);
