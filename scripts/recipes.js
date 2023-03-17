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

    image: '/assets/recipe-img/quesadillas-i-lag.jpg',
    imageAltText: 'Quesadilla i lag',

    title: 'Quesadillas i lag',
    shortDescription:
      'Quesadilla i lag er en herlig mexicansk streetfood inspiret ret, som vi ser oftere og oftere her i Danmark. Quesadilla består af totillas, der lægges sammen og gratineres med ost.',
    description:
      'Quesadilla i lag er en herlig mexicansk streetfood inspiret ret, som vi ser oftere og oftere her i Danmark. Quesadilla består af totillas, der lægges sammen og gratineres med ost. Her er quesadillaerne fyldt med peberfrugtblanding og kylling - og serveres med den helt uundværlige koriander i godt selskab. Quesadillas er en favorit fra det mexicanske streetfood-køkken, fordi det er både nemt og lækkert. Prøv vores opskrift på Quesadilllas med kylling og ost her.',

    time: '45',
    person: '4',
    language: 'Mecicansk',

    listName: 'Peberfrugtblanding',
    listNameTwo: 'Quesadilla i lag',

    ingredients: [
      {
        list: [
          { name: 'Smør', amount: '20', type: 'g' },
          { name: 'Finthakket rødløg', amount: '1', type: 'stk' },
          { name: 'Små knuste fed hvidløg', amount: '2', type: 'stk' },
          { name: 'Peberfrugter', amount: '2', type: 'stk' },
          { name: 'Tomater i mindre stykker', amount: '4', type: 'stk' },
          { name: 'Groft salt', amount: '2', type: 'tsk' },
          { name: 'Kyllingefilet i strimler', amount: '400', type: 'g' },
          { name: 'Friskkværnet peber', amount: '', type: '' },
        ],
      },
      {
        listTwo: [
          { name: 'Fuldkornstortillaer', amount: '6', type: 'stk' },
          { name: 'revet Mozzarella', amount: '140', type: 'g' },
          { name: 'Rødløg i tynde halve ringe', amount: '1', type: 'stk' },
          { name: 'Friskpresset limesaft', amount: '2', type: 'spsk' },
          { name: 'krydret tomatsauce', amount: '200', type: 'g' },
          { name: 'Frisk koriander', amount: '25', type: 'g' },
        ],
      },
    ],

    howToList: [
      {
        howTo:
          'Lad smørret smelte i en stor pande ved kraftig varme, men uden at det bruner.',
      },
      { howTo: 'Svits løg og hvidløg i ca. 1 min.' },
      {
        howTo:
          'Tilsæt peberfrugter, tomater, salt og peber og svits i yderligere ca. 4 min.',
      },
      { howTo: 'Hæld peberfrugtblandingen i en skål og tør panden af.' },
      {
        howTo:
          '<strong>Kylling</strong> <br>Lad smørret blive gyldent i panden og steg kyllingestrimlerne i ca. 3 min., drys med salt og peber.',
      },
      {
        howTo:
          '<strong>Quesadillas i lag</strong> <br>Læg tortillaerne sammen 3 og 3 således; Læg 1 tortilla på en plade med bagepapir og fordel herpå ¼ af peberfrugtblandingen, ¼ af kyllingekødet og lidt af osten.',
      },
      { howTo: 'Gentag og afslut med 1 tortilla og lidt ost på toppen.' },
      {
        howTo:
          'Gør det samme med de sidste 3 tortillaer på en anden bageplade.',
      },
      {
        howTo: 'Gratiner dem indtil osten er smeltet og gylden.',
      },
      {
        howTo:
          '<strong>Servering af quesadillas i lag</strong><br> Læg imens agurkerne på et lille fladt fad.',
      },
      {
        howTo: 'Bland rødløg og limesaft sammen og fordel det over agurkerne.',
      },
      {
        howTo:
          'Del de bagte quesadillas og server dem sammen med agurker og salsa.',
      },
      {
        howTo: 'Top det hele med friske koriander.',
      },
      {
        howTo: '<strong></strong> Gratinering Ca. 5 min. ved 225° - varmluft.',
      },
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
