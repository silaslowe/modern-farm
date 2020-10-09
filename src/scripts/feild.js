import { plantSeeds } from "./tractor.js";

const test = [
  ["Potato", "Soybean", "Soybean", "Corn"],
  ["Wheat", "Corn", "Wheat", "Asparagus"],
  ["Asparagus", "Wheat", "Soybean", "Corn"],
  ["Asparagus", "Soybean", "Potato", "Wheat"],
];

const feildArray = [];

export const addPlant = (seed) => {
  return feildArray.push(seed);
};

export const usePlants = () => {
  return [...feildArray];
};
