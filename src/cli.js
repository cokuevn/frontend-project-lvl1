import readlineSync from 'readline-sync';

export const userName = () => {
    let showName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${showName}!`);
}