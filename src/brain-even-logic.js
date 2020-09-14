import { ask, say } from './cli.js';

const rules = 'Answer \x1b[31m"yes"\x1b[37m \x1b[1mif\x1b[2m the number is even, otherwise answer \x1b[31m"no"\x1b[37m';

const MAX_VALUE = 50;

const MAX_ROUNDS = 3;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getCorrectAnswer = (n) => (n % 2 === 0 ? 'yes' : 'no');

const gameRound = () => {
  const n = getRandomInt(MAX_VALUE);
  say(`Question: ${n}`);

  const correctAnswer = getCorrectAnswer(n);
  const usersAnswer = ask('Your answer:');

  if (usersAnswer === correctAnswer) {
    say('Correct!');
  } else {
    say(`"${usersAnswer}" is wrong answer ;(. Correct answer was ${correctAnswer}!`);
  }

  return (usersAnswer === correctAnswer);
};

const gamePlay = () => {
  say('Welcome to the Brain Games!');

  const playerName = ask('May I have your name?');
  say(`Hello, ${playerName}`);

  say(rules);

  let roundsCount = 0;
  while (roundsCount < MAX_ROUNDS) {
    if (!gameRound()) {
      say(`Let's try again, ${playerName}!`);
      return;
    }
    roundsCount += 1;
  }

  say(`Congratulations, ${playerName}!`);
};

export default gamePlay;
