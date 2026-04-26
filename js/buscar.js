const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

document.addEventListener("DOMContentLoaded", () => {
  searchResults.innerHTML = `<p class="message">Escribe el nombre de una comida para buscar.</p>`;
});

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim();
  searchMealsByName(searchTerm);
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value.trim();
    searchMealsByName(searchTerm);
  }
});

async function searchMealsByName(name) {
  if (name === "") {
    searchResults.innerHTML = `<p class="message error">Por favor, escribe el nombre de una comida.</p>`;
    return;
  }

  searchResults.innerHTML = `<p class="message">Buscando comidas...</p>`;

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos.");
    }

    const data = await response.json();

    if (!data.meals) {
      searchResults.innerHTML = `<p class="message">No se encontraron resultados para "${name}".</p>`;
      return;
    }

    renderMeals(data.meals);
  } catch (error) {
    searchResults.innerHTML = `<p class="message error">Error: ${error.message}</p>`;
  }
}

function renderMeals(meals) {
  searchResults.innerHTML = "";

  meals.forEach((meal) => {
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
      loadMealDetails(meal.idMeal);
    });

    searchResults.appendChild(card);
  });
}

async function loadMealDetails(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    if (!response.ok) {
      throw new Error("No se pudo cargar el detalle.");
    }

    const data = await response.json();

    if (!data.meals) {
      return;
    }

    showMealModal(data.meals[0]);
  } catch (error) {
    alert("No se pudo abrir el detalle de la comida.");
  }
}