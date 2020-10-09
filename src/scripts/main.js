import { createPlan } from "./plan.js";
import { addPlant, usePlants } from "./feild.js";
import { plantSeeds } from "./tractor.js";

// const yearlyPlan = createPlan();
// const vege = createSoybean();
// const plants = usePlants();

// const test = () => {
//   addPlant(vege);
//   console.log(usePlants());
// };
// test();

const test = [
  ["Potato", "Soybean", "Soybean", "Corn"],
  ["Wheat", "Corn", "Wheat", "Asparagus"],
  ["Asparagus", "Wheat", "Soybean", "Corn"],
  ["Asparagus", "Soybean", "Potato", "Wheat"],
];

plantSeeds(test);
