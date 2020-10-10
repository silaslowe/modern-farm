const feildArray = [];

export const addPlant = (seed) => {
  return feildArray.push(seed);
};

export const usePlants = () => {
  return [...feildArray];
};
