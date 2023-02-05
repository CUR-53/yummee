let recipeData = [
  {
    type: 'breakfast',
    category: '/assets/breakfast_icon.svg',
    categoryAltText: 'breakfast ikon',

    image: '/assets/amerikanske-pandekager.jpg',
    imageAltText: 'Amerikanske pandekager',

    title: 'Amerikanske pandekager',
    description:
      'Amerikanske pandekager passer perfekt til både brunch og dessert. Bag de små, tykke amerikanske pandekager i en almindelig pande eller i en blinispande og servér med blåbær.',

    time: '30',
    person: '4',
    language: 'Amerikansk',
  },

  {
    type: 'lunch',
    category: '/assets/lunch_icon.svg',
    categoryAltText: 'lunch ikon',

    image: '/assets/Quesadillas-i-lag.jpeg',
    imageAltText: 'Quesadilla i lag',

    title: 'Quesadillas i lag',
    description:
      'Quesadilla i lag er en herlig mexicansk streetfood inspiret ret, som vi ser oftere og oftere her i Danmark. Quesadilla består af totillas, der lægges sammen og gratineres med ost.',

    time: '45',
    person: '4',
    language: 'Mexicansk',
  },

  {
    type: 'dinner',
    category: '/assets/dinner_icon.svg',
    categoryAltText: 'dinner ikon',

    image: '/assets/tomatsuppe-med-peberfrugt-og-sprod-gremolata.jpg',
    imageAltText: 'tomatsuppe med peberfrugt og sprod gremolata',

    title: 'Tomatsuppe med sprød gremolata',
    description:
      'En super hurtig vegetarisk tomatsuppe med flotte farver. Tomatsuppen er fyldt med grøntsager. Som ekstra pift er den toppet op med en sprød gremolata.',

    time: '25',
    person: '4',
    language: 'Spansk',

    onClick: 'onclick="location.href=\'recipes/recipe_template.html\';"',
  },

  {
    type: 'dessert',
    category: '/assets/dessert_icon.svg',
    categoryAltText: 'dessert ikon',

    image: '/assets/creme-brulee.jpg',
    imageAltText: 'creme brulee',

    title: 'Creme brulee',
    description:
      'Creme brulee er en af de klassiske franske desserter, der består af fløde, vanilje, æggeblommer og sukker afsluttet med et tyndt låg af sprødt brændt sukker.',

    time: '25',
    person: '4',
    language: 'Fransk',
  },
];

const renderRecipe = (data) => {
  let recipes = document.querySelector('.recipe_box');
  recipes.innerHTML = '';

  data.forEach((accord) => {
    recipes.innerHTML += `
    <div class="all ${accord.type}" ${accord.onClick}>
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
