export const getRandomNumber = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));
