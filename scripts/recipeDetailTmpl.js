export const renderDetailRecipe = (data) => {
  let ingredientsListHTML = '';
  let ingredientsListTwoHTML = '';
  let howToHTML = '';

  if (typeof data === 'object') {
    data.ingredients[0].list.forEach((ingredient) => {
      ingredientsListHTML += `
        <li>
          <p>${ingredient.name}</p>
          <p>${ingredient.amount} ${ingredient.type}</p>
        </li>
      `;
    });

    data.ingredients[1].listTwo.forEach((ingredient) => {
      ingredientsListTwoHTML += `
        <li>
          <p>${ingredient.name}</p>
          <p>${ingredient.amount} ${ingredient.type}</p>
        </li>
      `;
    });

    data.howToList.forEach((step) => {
      howToHTML += `
        <li>${step.howTo}</li>
      `;
    });
  }

  return `
    <div class="grid_recipe_container">
      <div class="recipe_mainText_box">
        <h1>${data.title}</h1>
        <div class="mainText_info_boxes">
          <p><img src="/assets/clock_icon.svg" alt="tid ikon" />${data.time}m</p>
          <p><img src="/assets/per_icon.svg" alt="person ikon" />${data.person} per.</p>
          <p>
            <img src="/assets/tool_icon.svg" alt="køkken ikon" />${data.language}
          </p>
        </div>
        <span>
          ${data.description}
        </span>
      </div>
      <div
        class="recipe_img_box"
        style="background-image: url(${data.image})"
      ></div>
      <div class="recipe_ingredients_box">
        <div class="ingredients_list">
          <h2>Ingredienser</h2>
          <h3>
            <img src="/assets/per_icon_white.svg" alt="person ikon" />
            ${data.person} personer
          </h3>
          <ul>
            <h4>${data.listName}</h4>
            ${ingredientsListHTML}
            <h4>${data.listNameTwo}</h4>
            ${ingredientsListTwoHTML}
          </ul>
        </div>
      </div>
      <div class="recipe_howTo_box">
        <div class="howTo_list">
          <h2>Sådan gør du</h2>
          <ol>
            <h4>${data.title}</h4>
            ${howToHTML}
            <h4>Velbekomme!</h4>
          </ol>
        </div>
      </div>
    </div>
  `;
};