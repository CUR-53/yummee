import { recipeData } from './recipes.js';

const renderRecipe = (data) => {
  const recipes = document.querySelector('.recipe_box');
  /*   const products = recipeData.getProducts(); */

  recipes.innerHTML = '';

  data.forEach((accord) => {
    recipes.innerHTML += `
    <div class="all ${accord.type}" onclick="location.href=\'${accord.page}\';"'>
    <div class="recipe_img">
            <img src="${accord.image}" alt="${accord.imageAltText}" />
            <span class="category_name"
              ><img src="${accord.category}" alt="${accord.categoryAltText}"
            /></span>
          </div>

          <div class="recipe_content">
            <div class="recipe_content_top">
              <span
                ><i
                  ><img
                    src="/assets/clock_icon_white.svg"
                    alt="tid ikon"
                  />${accord.time}min</i
                ></span
              ><span>
                <i
                  ><img
                    src="/assets/per_icon_white.svg"
                    alt="pr. person ikon"
                  />${accord.person} per.</i
                ></span
              >
              <span
                ><i
                  ><img
                    src="/assets/tool_icon_white.svg"
                    alt="køkken"
                  />${accord.language}</i
                ></span
              >
            </div>
            <h2>${accord.title}</h2>
            <p>
              ${accord.description}
            </p>
          </div>
        </div>
        </div>`;
  });
};

renderRecipe(recipeData);

if (recipes) {
  products.forEach((product) => {
    recipes.innerHTML += productTmpl(product);
  });
} else {
  console.log('Der er ingen item-container på denne side');
}

if (pageProduct) {
  let search = location.search;
  let productID = new URLSearchParams(search).get('id');

  const productContainer = document.querySelector('.recipe_details');
  const foundProduct = products.find((product) => product.id == productID);

  productContainer.innerHTML = productDetailTmpl(foundProduct);

  console.log('foundProduct', foundProduct);
}
