export const renderDetailRecipe = (data) => {
  let ingredientsListHTML = '';
  let ingredientsListHTMLTwo = '';
  let ingredientsListHTMLTre = '';

  let howToHTML = '';
  let howToHTMLTwo = '';
  let howToHTMLTre = '';
  let howToHTMLFour = '';
  let howToHTMLFive = '';

  if (typeof data === 'object') {
    // ingredients forEach lists
    data.ingredients[0].list.forEach((ingredient) => {
      ingredientsListHTML += `
        <li>
          <p>${ingredient.name}</p>
          <p>${ingredient.amount} ${ingredient.type}</p>
        </li>
      `;
    });

    if (data.ingredients.length > 1) {
      data.ingredients[1].list.forEach((ingredient) => {
        ingredientsListHTMLTwo += `
        <li>
          <p>${ingredient.name}</p>
          <p>${ingredient.amount} ${ingredient.type}</p>
        </li>
      `;
      });
    }

    if (data.ingredients.length > 2) {
      data.ingredients[2].list.forEach((ingredient) => {
        ingredientsListHTMLTre += `
        <li>
          <p>${ingredient.name}</p>
          <p>${ingredient.amount} ${ingredient.type}</p>
        </li>
      `;
      });
    }

    // How to forEach lists
    data.howToList[0].howTo.forEach((howTo) => {
      howToHTML += `
        <li>${howTo.step}</li>
      `;
    });

    if (data.howToList.length > 1) {
      data.howToList[1].howTo.forEach((howTo) => {
        howToHTMLTwo += `
          <li>${howTo.step}</li>
        `;
      });
    }

    if (data.howToList.length > 2) {
      data.howToList[2].howTo.forEach((howTo) => {
        howToHTMLTre += `
          <li>${howTo.step}</li>
        `;
      });
    }

    if (data.howToList.length > 3) {
      data.howToList[3].howTo.forEach((howTo) => {
        howToHTMLFour += `
          <li>${howTo.step}</li>
        `;
      });
    }

    if (data.howToList.length > 4) {
      data.howToList[4].howTo.forEach((howTo) => {
        howToHTMLFive += `
          <li>${howTo.step}</li>
        `;
      });
    }
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
            <h4>${data.ingredients[0].ingredientsTitle}</h4>
            ${ingredientsListHTML}
            ${ingredientsListHTMLTwo.length > 0 ? `<h4>${data.ingredients[1].ingredientsTitle}</h4>${ingredientsListHTMLTwo}` : ''}
            ${ingredientsListHTMLTre.length > 0 ? `<h4>${data.ingredients[2].ingredientsTitle}</h4>${ingredientsListHTMLTre}` : ''}
          </ul>
        </div>
      </div>
      <div class="recipe_howTo_box">
        <div class="howTo_list">
          <h2>Sådan gør du</h2>
          <ol>
            <h4>${data.howToList[0].howToTitle}</h4>
            ${howToHTML}
            ${howToHTMLTwo.length > 0 ? `<h4>${data.howToList[1].howToTitle}</h4>${howToHTMLTwo}` : ''}
            ${howToHTMLTre.length > 0 ? `<h4>${data.howToList[2].howToTitle}</h4>${howToHTMLTre}` : ''}
            ${howToHTMLFour.length > 0 ? `<h4>${data.howToList[3].howToTitle}</h4>${howToHTMLFour}` : ''}
            ${howToHTMLFive.length > 0 ? `<h4>${data.howToList[4].howToTitle}</h4>${howToHTMLFive}` : ''}
            <h4>Velbekomme!</h4>
          </ol>
        </div>
      </div>
    </div>
  `;
};
