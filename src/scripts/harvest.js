export const harvestPlants = (plantArray) => {
  let cropYeild = [];
  for (const crop of plantArray) {
    if (!crop.output) {
      for (let i = 0; i < crop[0].output; i++) {
        cropYeild.push(crop[0]);
      }
    }
    if (crop.output) {
      for (let i = 0; i < crop.output; i++) {
        cropYeild.push(crop);
      }
    }
  }
  return cropYeild;
};
