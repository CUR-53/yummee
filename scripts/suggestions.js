import recipeData from './recipes.js';

const searchInput = document.querySelector('input[name="recipe_search"]');
const autocomBox = document.querySelector('.autocom_box');

searchInput.addEventListener('keyup', function (event) {
  const inputText = searchInput.value.toLowerCase();
  const suggestions = recipeData.filter(function (recipe) {
    return recipe.title.toLowerCase().includes(inputText);
  });

  autocomBox.innerHTML = '';
  suggestions.forEach(function (suggestedRecipe) {
    const suggestionLink = document.createElement('a');
    suggestionLink.href = `opskrift.html?id=${suggestedRecipe.id}`;
    suggestionLink.innerText = suggestedRecipe.title;
    autocomBox.appendChild(suggestionLink);
  });

  // Select the first suggestion when pressing enter
  if (event.keyCode === 13 && suggestions.length > 0) {
    window.location.href = `opskrift.html?id=${suggestions[0].id}`;
  }
});

// Close the suggestions box when clicking outside of it
document.addEventListener('click', function (event) {
  if (!autocomBox.contains(event.target)) {
    autocomBox.innerHTML = '';
  }
});
