import readlineSync from "readline-sync";

export const userName = () => {
  const showName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${showName}!`);
};
