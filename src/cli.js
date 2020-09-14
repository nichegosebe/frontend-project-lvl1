import readlineSync from 'readline-sync';

const ask = (question) => readlineSync.question(`${question} `);

const say = (text) => console.log(text);

const sayTo = (text, userName) => console.log(`${text}, ${userName}!`);

export { ask, say, sayTo };
