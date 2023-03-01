import { recipeDetailData } from './recipeDetail';

const renderRecipe = (data) => {
  let recipeDetails = document.querySelector('.recipe_details');
  recipeDetails.innerHTML = '';

  data.forEach((accord) => {
    recipeDetails.innerHTML += `<div class="grid_recipe_container">
        <div class="recipe_mainText_box">
          <h1>Amerikanske pandekager</h1>
          <div class="mainText_info_boxes">
            <p><img src="/assets/clock_icon.svg" alt="tid ikon" />30m</p>
            <p><img src="/assets/per_icon.svg" alt="person ikon" />4 per.</p>
            <p>
              <img src="/assets/tool_icon.svg" alt="køkken ikon" />Amerikansk
            </p>
          </div>
          <span>
            Amerikanske pandekager passer perfekt til både brunch og dessert.
            Bag de små, tykke amerikanske pandekager i en almindelig pande eller
            i en blinispande og servér med blåbær, ahornsirup og smør. Det er
            både nemt og dejligt at hygge sig med at lave amerikanske
            pandekager. Og det går rigtig hurtigt med at få de amerikanske
            pandekager spist!
          </span>
        </div>
        <div
          class="recipe_img_box"
          style="background-image: url(/assets/amerikanske-pandekager.jpg)"
        ></div>
        <div class="recipe_ingredients_box">
          <div class="ingredients_list">
            <h2>Ingredienser</h2>
            <h3>
              <img src="/assets/per_icon_white.svg" alt="person ikon" />
              4 personer
            </h3>
            <ul>
              <h4>Amerikanske pandekager</h4>
              <li>
                <p>Hvedemel</p>
                <p>300 g</p>
              </li>
              <li>
                <p>Mælk</p>
                <p>3 dl</p>
              </li>
              <li>
                <p>skyr eller græsk yoghurt</p>
                <p>2 dl</p>
              </li>
              <li>
                <p>Æg</p>
                <p>2</p>
              </li>
              <li>
                <p>Sukker</p>
                <p>2 spsk</p>
              </li>
              <li>
                <p>Groft salt</p>
                <p>¼ tsk</p>
              </li>
              <li>
                <p>Bagepulver</p>
                <p>1½ tsk</p>
              </li>
              <li>
                <p>Smør - smeltet</p>
                <p>50 g</p>
              </li>

              <h4>Tilbehør</h4>
              <li>
                <p>Ahornsirup</p>
                <p>1 dl</p>
              </li>
              <li>
                <p>Blåbær</p>
                <p>100 g</p>
              </li>
              <li>
                <p>Smør</p>
                <p>50 g</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="recipe_howTo_box">
          <div class="howTo_list">
            <h2>Sådan gør du</h2>
            <ol>
              <h4>Amerikanske pandekager</h4>
              <li>Pisk mel og mælk sammen med en håndmixer.</li>
              <li>Tilsæt kvark og pisk æg og resten af ingredienserne i.</li>
              <li>
                Fordel 4 portioner dej a ca. ½ dl på panden. Bag pandekagerne
                ca. 2 min. på hver side.
              </li>
              <li>Server pandekagerne med ahornsirup, blåbær og smør.</li>
              <h4>Velbekomme!</h4>
            </ol>
          </div>
        </div>
      </div>`;
  });
};

renderRecipe(recipeDetailData);
