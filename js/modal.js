const mealModal = document.getElementById("mealModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalArea = document.getElementById("modalArea");
const modalIngredients = document.getElementById("modalIngredients");
const modalInstructions = document.getElementById("modalInstructions");

if (closeModal) {
  closeModal.addEventListener("click", closeMealModal);
}

if (mealModal) {
  mealModal.addEventListener("click", (event) => {
    if (event.target === mealModal) {
      closeMealModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMealModal();
  }
});

function fillModal(meal) {
  modalImage.src = meal.strMealThumb;
  modalImage.alt = meal.strMeal;
  modalTitle.textContent = meal.strMeal;
  modalCategory.textContent = meal.strCategory || "Sin categoría";
  modalArea.textContent = meal.strArea || "Sin área";
  modalInstructions.textContent =
    meal.strInstructions || "No hay instrucciones disponibles.";

  modalIngredients.innerHTML = "";

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = `${measure ? measure.trim() : ""} ${ingredient.trim()}`.trim();
      modalIngredients.appendChild(li);
    }
  }
}

function openMealModal() {
  mealModal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeMealModal() {
  mealModal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

function showMealModal(meal) {
  fillModal(meal);
  openMealModal();
}