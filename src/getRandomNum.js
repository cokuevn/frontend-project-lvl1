export const getRandomInt = (min = 1, max = 99) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export default getRandomInt;
