import { ask, say } from './cli.js';

const singleRound = (generateQA) => {
  const [question, correctAnswer] = generateQA();
  say(`Question: ${question}`);
  const usersAnswer = ask('Your answer:');
  if (usersAnswer === correctAnswer) {
    say('Correct!');
  } else {
    say(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"!`);
  }
  return usersAnswer === correctAnswer;
};

const playeGame = (game, maxRounds = 3) => {
  const [getRules, generateQA] = game;

  say('Welcome to the Brain Games!');
  const playerName = ask('May I have your name?');
  say(`Hello, ${playerName}`);
  say(getRules());

  let roundsCount = 0;
  while (roundsCount < maxRounds) {
    if (!singleRound(generateQA)) {
      say(`Let's try again, ${playerName}!`);
      return;
    }
    roundsCount += 1;
  }

  say(`Congratulations, ${playerName}!`);
};

export default playeGame;
