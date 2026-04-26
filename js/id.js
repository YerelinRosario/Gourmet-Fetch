const idInput = document.getElementById("idInput");
const idButton = document.getElementById("idButton");
const idResults = document.getElementById("idResults");

document.addEventListener("DOMContentLoaded", () => {
  idResults.innerHTML = `<p class="message">Escribe un ID para buscar una comida.</p>`;
});

idButton.addEventListener("click", () => {
  const mealId = idInput.value.trim();
  searchMealById(mealId);
});

idInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const mealId = idInput.value.trim();
    searchMealById(mealId);
  }
});

async function searchMealById(id) {
  if (id === "") {
    idResults.innerHTML = `<p class="message error">Por favor, escribe un ID válido.</p>`;
    return;
  }

  idResults.innerHTML = `<p class="message">Buscando comida...</p>`;

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos.");
    }

    const data = await response.json();

    if (!data.meals) {
      idResults.innerHTML = `<p class="message">No se encontró ninguna comida con el ID "${id}".</p>`;
      return;
    }

    renderMeal(data.meals[0]);
  } catch (error) {
    idResults.innerHTML = `<p class="message error">Error: ${error.message}</p>`;
  }
}

function renderMeal(meal) {
  idResults.innerHTML = "";

  const card = document.createElement("article");
  card.classList.add("meal-card");

  card.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-image">
    <div class="meal-content">
      <h3 class="meal-title">${meal.strMeal}</h3>
      <button class="details-btn" data-id="${meal.idMeal}">Ver Detalles</button>
    </div>
  `;

  const detailsBtn = card.querySelector(".details-btn");
  detailsBtn.addEventListener("click", () => {
    showMealModal(meal);
  });

  idResults.appendChild(card);
}