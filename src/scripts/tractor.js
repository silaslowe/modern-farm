import { createSoybean } from "./seeds/soybean.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./feild.js";

export const plantSeeds = (plantingPlanArray) => {
  for (let i = 0; i < plantingPlanArray.length; i++) {
    for (let j = 0; j < plantingPlanArray[i].length; j++) {
      let seedling = plantingPlanArray[i][j];
      if (seedling === "Potato") {
        addPlant(createPotato());
      }
      if (seedling === "Corn") {
        addPlant(createCorn());
      }
      if (seedling === "Asparagus") {
        addPlant(createAsparagus());
      }
      if (seedling === "Soybean") {
        addPlant(createSoybean());
      }
      if (seedling === "Sunflower") {
        addPlant(createSunflower());
      }
      if (seedling === "Wheat") {
        addPlant(createWheat());
      }
    }
  }
  console.log(usePlants());
};
