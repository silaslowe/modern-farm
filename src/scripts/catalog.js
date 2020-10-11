export const Catalog = (plantArray) => {
  const content = document.querySelector(".content");

  let contentHTMLRepresentation = "";
  for (const plant of plantArray) {
    contentHTMLRepresentation += `<p class="plant">${plant.type}</p>`;
  }

  return (content.innerHTML += `${contentHTMLRepresentation}`);
};
