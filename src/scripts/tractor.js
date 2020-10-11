import { createSoybean } from "./seeds/soybean.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";

export const plantSeeds = (plantingPlanArray) => {
  for (const row of plantingPlanArray) {
    for (const plant of row) {
      if (plant === "Potato") {
        addPlant(createPotato());
      }
      if (plant === "Corn") {
        const corns = createCorn();
        corns.forEach((corn) => addPlant(corn));
      }
      if (plant === "Asparagus") {
        addPlant(createAsparagus());
      }
      if (plant === "Soybean") {
        addPlant(createSoybean());
      }
      if (plant === "Sunflower") {
        addPlant(createSunflower());
      }
      if (plant === "Wheat") {
        addPlant(createWheat());
      }
    }
  }
  return usePlants();
};
