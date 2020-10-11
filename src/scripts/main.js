import { createPlan } from "./plan.js";
import { harvestPlants } from "./harvester.js";
import { plantSeeds } from "./tractor.js";
import { Catalog } from "./catalog.js";
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

Catalog(harvestTime);
