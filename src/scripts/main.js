import { createPlan } from "./plan.js";
import { createSoybean } from "./seeds/soybean.js";
import { addPlant, usePlants } from "./feild.js";

const yearlyPlan = createPlan();
const vege = createSoybean();
const plants = usePlants();

const test = () => {
  addPlant(vege);
  console.log(usePlants());
};
test();
