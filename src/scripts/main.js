import { createPlan } from "./plan.js";
import { harvestPlants } from "./harvest.js";
import { plantSeeds } from "./tractor.js";
// import { addPlant, usePlants } from "./feild.js";
// import { plantSeeds } from "./tractor.js";

// const yearlyPlan = createPlan();
// const vege = createSoybean();
// const plants = usePlants();

// const test = () => {
//   addPlant(vege);
//   console.log(usePlants());
// };
// test();

const newPlan = createPlan();

console.log(newPlan);

const plantingTime = plantSeeds(newPlan);

console.log(plantingTime);

const harvestTime = harvestPlants(plantingTime);

console.log(harvestTime);
