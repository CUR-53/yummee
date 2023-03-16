  const recipeData = [
    {
      id: 0,

      type: 'breakfast',
      category: '/assets/breakfast_icon.svg',
      categoryAltText: 'breakfast ikon',

      image: '/assets/amerikanske-pandekager.jpg',
      imageAltText: 'Amerikanske pandekager',

      title: 'Amerikanske pandekager',
      shortDescription:
        'Amerikanske pandekager passer perfekt til både brunch og dessert. Bag de små, tykke amerikanske pandekager i en almindelig pande eller i en blinispande og servér med blåbær.',
      description:
        'Amerikanske pandekager passer perfekt til både brunch og dessert. Bag de små, tykke amerikanske pandekager i en almindelig pande eller i en blinispande og servér med blåbær, ahornsirup og smør. Det er både nemt og dejligt at hygge sig med at lave amerikanske pandekager. Og det går rigtig hurtigt med at få de amerikanske pandekager spist!',

      time: '30',
      person: '4',
      language: 'Amerikansk',

      ingredients: [
        {
          list: [
            { name: 'Hvedemel', amount: '300', type: 'g' },
            { name: 'Mælk', amount: '3', type: 'dl' },
            { name: 'Skyr eller græsk yoghurt', amount: '2', type: 'dl' },
            { name: 'Æg', amount: '2', type: 'stk' },
            { name: 'Sukker', amount: '2', type: 'spsk' },
            { name: 'Groft salt', amount: '¼', type: 'tsk' },
            { name: 'Bagepulver', amount: '1½', type: 'tsk' },
            { name: 'Smør - smeltet', amount: '50', type: 'g' },
          ],
        },
        {
          listTwo: [
            { name: 'Ahornsirup', amount: '1', type: 'dl' },
            { name: 'Blåbær', amount: '100', type: 'g' },
            { name: 'Smør', amount: '50', type: 'g' },
          ],
        },
      ],

      howToList: [
        { howTo: 'Pisk mel og mælk sammen med en håndmixer.' },
        { howTo: 'Tilsæt kvark og pisk æg og resten af ingredienserne i.' },
        {
          howTo:
            'Fordel 4 portioner dej a ca. ½ dl på panden. Bag pandekagerne ca. 2 min. på hver side. ',
        },
        { howTo: 'Server pandekagerne med ahornsirup, blåbær og smør.' },
      ],

      page: 'opskrifter/amerikanske-pandekager.html',
    },

    {
      id: 1,

      type: 'lunch',
      category: '/assets/lunch_icon.svg',
      categoryAltText: 'lunch ikon',

      image: '/assets/quesadillas-i-lag.jpg',
      imageAltText: 'Quesadilla i lag',

      title: 'Quesadillas i lag',
      shortDescription:
        'Quesadilla i lag er en herlig mexicansk streetfood inspiret ret, som vi ser oftere og oftere her i Danmark. Quesadilla består af totillas, der lægges sammen og gratineres med ost.',
      description:
        'Amerikanske pandekager passer perfekt til både brunch og dessert. Bag de små, tykke amerikanske pandekager i en almindelig pande eller i en blinispande og servér med blåbær, ahornsirup og smør. Det er både nemt og dejligt at hygge sig med at lave amerikanske pandekager. Og det går rigtig hurtigt med at få de amerikanske pandekager spist!',

      time: '30',
      person: '4',
      language: 'Amerikansk',

      ingredients: [
        {
          list: [
            { name: 'Hvedemel', amount: '300', type: 'g' },
            { name: 'Mælk', amount: '3', type: 'dl' },
            { name: 'Skyr eller græsk yoghurt', amount: '2', type: 'dl' },
            { name: 'Æg', amount: '2', type: 'stk' },
            { name: 'Sukker', amount: '2', type: 'spsk' },
            { name: 'Groft salt', amount: '¼', type: 'tsk' },
            { name: 'Bagepulver', amount: '1½', type: 'tsk' },
            { name: 'Smør - smeltet', amount: '50', type: 'g' },
          ],
        },
        {
          listTwo: [
            { name: 'Ahornsirup', amount: '1', type: 'dl' },
            { name: 'Blåbær', amount: '100', type: 'g' },
            { name: 'Smør', amount: '50', type: 'g' },
          ],
        },
      ],

      howToList: [
        { howTo: 'Pisk mel og mælk sammen med en håndmixer.' },
        { howTo: 'Tilsæt kvark og pisk æg og resten af ingredienserne i.' },
        {
          howTo:
            'Fordel 4 portioner dej a ca. ½ dl på panden. Bag pandekagerne ca. 2 min. på hver side. ',
        },
        { howTo: 'Server pandekagerne med ahornsirup, blåbær og smør.' },
      ],

      page: 'opskrifter/quesadilla-i-lag.html',
    },

    {
      id: 2,

      type: 'dinner',
      category: '/assets/dinner_icon.svg',
      categoryAltText: 'dinner ikon',

      image: '/assets/tomatsuppe-med-peberfrugt-og-sprod-gremolata.jpg',
      imageAltText: 'tomatsuppe med peberfrugt og sprød gremolata',

      title: 'Tomatsuppe med sprød gremolata',
      description:
        'En super hurtig vegetarisk tomatsuppe med flotte farver. Tomatsuppen er fyldt med grøntsager. Som ekstra pift er den toppet op med en sprød gremolata.',

      time: '25',
      person: '4',
      language: 'Spansk',

      page: 'opskrifter/tomatsuppe-med-sprød-gremolata.html',
    },

    {
      id: 3,

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

      page: 'opskrifter/creme-brulee.html',
    },

    {
      id: 4,

      type: 'dinner',
      category: '/assets/dinner_icon.svg',
      categoryAltText: 'dinner ikon',

      image: '/assets/wok-med-kylling-nudler-og-grontsager.jpg',
      imageAltText: 'Wok med kylling, nudler og grøntsager',

      title: 'Wok med kylling, nudler og grøntsager',
      description:
        'Wok med kylling, nudler og grøntsager - en dejlig asiatisk inspireret wokret med masser af grønt og sprød topping af ristede cashewnødder og friske forårsløg. ',

      time: '30',
      person: '4',
      language: 'Japansk',

      page: 'opskrifter/wok-med-kylling-nudler-og-grøntsager.html',
    },

    {
      id: 5,

      type: 'lunch',
      category: '/assets/lunch_icon.svg',
      categoryAltText: 'lunch ikon',

      image: '/assets/mozzarella-sticks.jpg',
      imageAltText: 'Mozzarella sticks',

      title: 'Mozzarella sticks',
      description:
        'Cheesesticks eller mozzarella sticks er fastfood eller street food, når det er rigtig fedt eller fedtet... Her bliver mozarella sticks serveret i en ny udgave med mere smag.',

      time: '30',
      person: '4',
      language: 'Fransk',

      page: 'opskrifter/mozzarella-sticks.html',
    },

    {
      id: 6,

      type: 'breakfast',
      category: '/assets/breakfast_icon.svg',
      categoryAltText: 'breakfast ikon',

      image: '/assets/belgiske-vafler.jpg',
      imageAltText: 'Belgiske vafler',

      title: 'Belgiske vafler',
      description:
        'Belgiske vafler er en rigtig dejlig hyggespise. Server hjemmelavede belgiske vafler efter en kølig gåtur, til weekendens morgenmad eller til brunch. Vaflerne er sprøde udenpå og bløde indeni.',

      time: '30',
      person: '3',
      language: 'Belgiske',

      page: 'opskrifter/belgiske-vafler.html',
    },

    {
      id: 7,

      type: 'dessert',
      category: '/assets/dessert_icon.svg',
      categoryAltText: 'dessert ikon',

      image: '/assets/muffins-med-chokoladestykker.jpg',
      imageAltText: 'Muffins med chokoladestykker',

      title: 'Muffins med chokoladestykker',
      description:
        'Muffins er betegnelsen for en meget populær kage, som er bagt i en lille, rund portionsform - og der findes et utal af varianter.',

      time: '45',
      person: '4',
      language: 'Amerikansk',

      page: 'opskrifter/muffins-med-chokoladestykker.html',
    },

    {
      id: 8,

      type: 'dinner',
      category: '/assets/dinner_icon.svg',
      categoryAltText: 'dinner ikon',

      image: '/assets/spaghetti-carbonara.jpg',
      imageAltText: 'Spaghetti Carbonara',

      title: 'Spaghetti Carbonara',
      description:
        'Spaghetti Carbonara - næsten som at sidde på en italiensk restaurant. Vi foreslår en tomatsalat til Spaghetti Cabonara. Det ville de nok ikke gøre i Italien, de ville spise salaten bagefter.',

      time: '45',
      person: '4',
      language: 'Italiensk ',

      page: 'opskrifter/spaghetti-carbonara.html',
    },
  ];

  export default recipeData;