import { ask, say } from './cli.js';

const gameRound = (generateQuestion) => {
  const [question, correctAnswer] = generateQuestion();

  say(`Question: ${question}`);

  const usersAnswer = ask('Your answer:');

  if (usersAnswer === correctAnswer) {
    say('Correct!');
  } else {
    say(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"!`);
  }

  return usersAnswer === correctAnswer;
};

const gamePlay = (getRules, generateQuestion, maxRounds = 3) => {
  say('Welcome to the Brain Games!');

  const playerName = ask('May I have your name?');
  say(`Hello, ${playerName}`);

  say(getRules());

  let roundsCount = 0;
  while (roundsCount < maxRounds) {
    if (!gameRound(generateQuestion)) {
      say(`Let's try again, ${playerName}!`);
      return;
    }
    roundsCount += 1;
  }

  say(`Congratulations, ${playerName}!`);
};

export default gamePlay;
