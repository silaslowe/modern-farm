const fieldArray = [];

export const addPlant = (seed) => {
  return fieldArray.push(seed);
};

export const usePlants = () => {
  return [...fieldArray];
};
