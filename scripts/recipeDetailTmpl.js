import recipeData from './recipes.js';

export const renderDetailRecipe = (data) => {
  let recipeDetails = document.querySelector('.recipe_details');
  recipeDetails.innerHTML = '';

  data.forEach((accord) => {
    let ingredientsListHTML = '';
    let ingredientsListTwoHTML = '';
    let howToHTML = '';

    accord.ingredients[0].list.forEach((ingredient) => {
      ingredientsListHTML += `
        <li>
          <p>${ingredient.name}</p>
          <p>${ingredient.amount} ${ingredient.type}</p>
        </li>
      `;
    });

    accord.ingredients[1].listTwo.forEach((ingredient) => {
      ingredientsListTwoHTML += `
        <li>
          <p>${ingredient.name}</p>
          <p>${ingredient.amount} ${ingredient.type}</p>
        </li>
      `;
    });

    accord.howToList.forEach((step) => {
      howToHTML += `
        <li>${step.howTo}</li>
      `;
    });

    recipeDetails.innerHTML += `
      <div class="grid_recipe_container">
        <div class="recipe_mainText_box">
          <h1>${accord.title}</h1>
          <div class="mainText_info_boxes">
            <p><img src="/assets/clock_icon.svg" alt="tid ikon" />${accord.time}m</p>
            <p><img src="/assets/per_icon.svg" alt="person ikon" />${accord.person} per.</p>
            <p>
              <img src="/assets/tool_icon.svg" alt="køkken ikon" />${accord.language}
            </p>
          </div>
          <span>
            ${accord.description}
          </span>
        </div>
        <div
          class="recipe_img_box"
          style="background-image: url(${accord.image})"
        ></div>
        <div class="recipe_ingredients_box">
          <div class="ingredients_list">
            <h2>Ingredienser</h2>
            <h3>
              <img src="/assets/per_icon_white.svg" alt="person ikon" />
              ${accord.person} personer
            </h3>
            <ul>
              <h4>${accord.title}</h4>
              ${ingredientsListHTML}
              <h4>Tilbehør</h4>
              ${ingredientsListTwoHTML}
            </ul>
          </div>
        </div>
        <div class="recipe_howTo_box">
          <div class="howTo_list">
            <h2>Sådan gør du</h2>
            <ol>
              <h4>${accord.title}</h4>
              ${howToHTML}
              <h4>Velbekomme!</h4>
            </ol>
          </div>
        </div>
      </div>
    `;
  });
};

renderDetailRecipe(recipeData);
