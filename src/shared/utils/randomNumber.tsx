export const randomNumber: () => () => number = () => {
  return () => Math.floor(Math.random() * 200) + 1;
};
