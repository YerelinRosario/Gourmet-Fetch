const categories = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian"
];

const categoriesContainer = document.getElementById("categoriesContainer");
const mealsContainer = document.getElementById("mealsContainer");

let activeCategory = "Seafood";

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  loadMealsByCategory(activeCategory);
});

function renderCategories() {
  categoriesContainer.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.classList.add("category-btn");

    if (category === activeCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      activeCategory = category;
      updateActiveCategoryButton();
      loadMealsByCategory(category);
    });

    categoriesContainer.appendChild(button);
  });
}

function updateActiveCategoryButton() {
  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach((button) => {
    if (button.textContent === activeCategory) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

async function loadMealsByCategory(category) {
  mealsContainer.innerHTML = `<p class="message">Cargando comidas...</p>`;

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos.");
    }

    const data = await response.json();

    if (!data.meals) {
      mealsContainer.innerHTML = `<p class="message">No se encontraron comidas en esta categoría.</p>`;
      return;
    }

    renderMeals(data.meals);
  } catch (error) {
    mealsContainer.innerHTML = `<p class="message error">Error: ${error.message}</p>`;
  }
}

function renderMeals(meals) {
  mealsContainer.innerHTML = "";

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

    mealsContainer.appendChild(card);
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