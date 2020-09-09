import readlineSync from "readline-sync";
const getName = () => readlineSync.question("May I have your name? ");

const cliGreetings = () => {
  console.log("Welcome to the Brain Games!");
  console.log(`Hello, ${name()}!`);
};

export { cliGreetings };
