import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name?');

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${getName()}!`);
};

export default greeting;
