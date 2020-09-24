import readlineSync from 'readline-sync';

const ask = (question) => readlineSync.question(`${question}`);

const say = (text) => console.log(text);

export { ask, say };
