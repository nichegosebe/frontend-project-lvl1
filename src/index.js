/* eslint-disable import/prefer-default-export */
import { ask, say } from './cli.js';

const maxRounds = 3;

const playGame = (rule, generateQuestionAndAnswer) => {
  say('Welcome to the Brain Games!');
  const playerName = ask('May I have your name? ');
  say(`Hello, ${playerName}`);
  say(rule);

  for (let i = 0; i < maxRounds; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    say(`Question: ${question}`);
    const usersAnswer = ask('Your answer: ');
    if (usersAnswer === correctAnswer) {
      say('Correct!');
    } else {
      say(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"!`);
      say(`Let's try again, ${playerName}!`);
      return;
    }
  }
  say(`Congratulations, ${playerName}!`);
};

export { playGame };
