document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const form = document.querySelector("#new-item-form");
  const animalList = document.createElement("ul");
  const animalListDiv = document.querySelector("#animal-list");
  animalListDiv.appendChild(animalList);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputAnimal = event.target.animal.value;
    const inputCountry = event.target.country.value;
    const inputCategory = event.target.category.value;

    const animalListItem = document.createElement("li");
    animalListItem.textContent = `${inputAnimal} spotted in ${inputCountry}: ${inputCategory}`;

    animalList.appendChild(animalListItem);


    form.reset();

    const deleteButton = document.querySelector("#button");
    deleteButton.addEventListener("click", () => {
      console.dir(deleteButton);
      animalList.innerHTML = '';
    });

  });








});
