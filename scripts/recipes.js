const recipeData = [
  // Amerikanske pandekager
  {
    id: 0,

    type: 'breakfast',
    category: '/assets/breakfast_icon.svg',
    categoryAltText: 'breakfast ikon',

    image: '/assets/recipe-img/amerikanske-pandekager.jpg',
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
        ingredientsTitle: 'Amerikanske pandekager',
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
        ingredientsTitle: 'Tilbehør',
        list: [
          { name: 'Ahornsirup', amount: '1', type: 'dl' },
          { name: 'Blåbær', amount: '100', type: 'g' },
          { name: 'Smør', amount: '50', type: 'g' },
        ],
      },
    ],

    howToList: [
      {
        howToTitle: 'Amerikanske pandekager',
        howTo: [
          { step: 'Pisk mel og mælk sammen med en håndmixer.' },
          { step: 'Tilsæt kvark og pisk æg og resten af ingredienserne i.' },
          {
            step: 'Fordel 4 portioner dej a ca. ½ dl på panden. Bag pandekagerne ca. 2 min. på hver side. ',
          },
          { step: 'Server pandekagerne med ahornsirup, blåbær og smør.' },
        ],
      },
    ],
  },

  // Quesadilla i lag
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

    ingredients: [
      {
        ingredientsTitle: 'Peberfrugtblanding',
        list: [
          { name: 'Smør', amount: '10', type: 'g' },
          { name: 'Finthakket rødløg', amount: '1', type: 'stk' },
          { name: 'Små knuste fed hvidløg', amount: '2', type: 'stk' },
          { name: 'Peberfrugter', amount: '2', type: 'stk' },
          { name: 'Tomater i mindre stykker', amount: '4', type: 'stk' },
          { name: 'Groft salt', amount: '1', type: 'stk' },
          { name: 'Friskkværnet peber', amount: '', type: '' },
        ],
      },
      {
        ingredientsTitle: 'Kylling',
        list: [
          { name: 'Smør', amount: '10', type: 'g' },
          { name: 'Kyllingefilet i strimler', amount: '400', type: 'g' },
          { name: 'Groft salt', amount: '1', type: 'stk' },
          { name: 'Friskkværnet peber', amount: '', type: '' },
        ],
      },
      {
        ingredientsTitle: 'Quesadilla i lag',
        list: [
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
        howToTitle: 'Peberfrugtblanding',
        howTo: [
          { step: 'Lad smørret smelte i en stor pande ved kraftig varme, men uden at det bruner.' },
          { step: 'Svits løg og hvidløg i ca. 1 min.' },
          { step: 'Tilsæt peberfrugter, tomater, salt og peber og svits i yderligere ca. 4 min.' },
          { step: 'Hæld peberfrugtblandingen i en skål og tør panden af.' },
        ],
      },
      {
        howToTitle: 'Kylling',
        howTo: [{ step: 'Lad smørret blive gyldent i panden og steg kyllingestrimlerne i ca. 3 min., drys med salt og peber.' }],
      },
      {
        howToTitle: 'Quesadillas i lag',
        howTo: [
          {
            step: 'Læg tortillaerne sammen 3 og 3 således; Læg 1 tortilla på en plade med bagepapir og fordel herpå ¼ af peberfrugtblandingen, ¼ af kyllingekødet og lidt af osten.',
          },
          { step: 'Gentag og afslut med 1 tortilla og lidt ost på toppen.' },
          { step: 'Gør det samme med de sidste 3 tortillaer på en anden bageplade.' },
          { step: 'Gratiner dem indtil osten er smeltet og gylden.' },
        ],
      },
      {
        howToTitle: 'Servering af quesadillas i lag',
        howTo: [
          { step: 'Læg imens agurkerne på et lille fladt fad.' },
          { step: 'Bland rødløg og limesaft sammen og fordel det over agurkerne.' },
          { step: 'Del de bagte quesadillas og server dem sammen med agurker og salsa.' },
          { step: 'Top det hele med friske koriander.' },
        ],
      },
      {
        howToTitle: 'Gratinering',
        howTo: [{ step: 'Gratinering Ca. 5 min. ved 225° - varmluft.' }],
      },
    ],
  },

  // Tomatsuppe med sprød gremolata
  {
    id: 2,

    type: 'dinner',
    category: '/assets/dinner_icon.svg',
    categoryAltText: 'dinner ikon',

    image: '/assets/recipe-img/tomatsuppe.jpg',
    imageAltText: 'tomatsuppe med peberfrugt og sprød gremolata',

    title: 'Tomatsuppe med sprød gremolata',
    shortDescription:
      'En super hurtig vegetarisk tomatsuppe med flotte farver. Tomatsuppen er fyldt med grøntsager. Som ekstra pift er den toppet op med en sprød gremolata.',
    description:
      'En super hurtig vegetarisk tomatsuppe med flotte farver. Tomatsuppen er fyldt med grøntsager. Som ekstra pift er den toppet op med en sprød gremolata. Gremolata er fantastisk, når du vil have ekstra smag til en ret. Originalen består af persille, hvidløg og citronskal. Vi har ladet os inspirere og givet den knas fra de ristede græskarkerner og fylde og lidt sødme fra æbler. Tomatsuppe med peberfrugt og sprød gremolata er til de dage, hvor det gerne må være nemt, samtidig med, at du vil sætte dit eget fingeraftryk på aftensmaden.',

    time: '25',
    person: '4',
    language: 'Spansk',

    ingredients: [
      {
        ingredientsTitle: 'Tomatsuppe',
        list: [
          { name: 'Rapsolie', amount: '½', type: 'spsk' },
          { name: 'Finthakkede rødløg', amount: '2', type: 'stk' },
          { name: 'Tomatsuppe', amount: '1', type: 'liter' },
          { name: 'Vand', amount: '1½', type: 'dl' },
          { name: 'Groft salt', amount: '½', type: 'tsk' },
          { name: 'Peberfrugter i korte strimler', amount: '3', type: 'stk' },
        ],
      },
      {
        ingredientsTitle: 'Gremolata',
        list: [
          { name: 'Græskarkerner', amount: '5', type: 'spsk' },
          { name: 'Grofthakket bredbladet persille', amount: '2', type: 'dl' },
          { name: 'Fintrevet citronskal', amount: '2', type: 'tsk' },
          { name: 'Røde æbler i små tern', amount: '2', type: 'stk' },
        ],
      },
      {
        ingredientsTitle: 'Tilbehør',
        list: [{ name: 'Italiensk flute - evt. ristet', amount: '300', type: 'g' }],
      },
    ],

    howToList: [
      {
        howToTitle: 'Tomatsuppe',
        howTo: [
          { step: 'Lad olien blive varm i en gryde.' },
          { step: 'Svits løgene ved jævn varme i ca. 2 min' },
          { step: 'Tilsæt tomatsuppe, vand, salt og peber og bring suppen i kog under omrøring.' },
          { step: 'Kom peberfrugterne i og kog suppen ved svag varme i ca. 3 min. Smag til. Gremolata' },
        ],
      },
      {
        howToTitle: 'Gremolata',
        howTo: [
          { step: 'Kom græskarkernerne i en tør pande og rist dem ved kraftig varme i ca. 3 min. - rør af og til.' },
          { step: 'Bland græskarkernerne med persille, citronskal og æbletern.' },
        ],
      },
      {
        howToTitle: 'Ved serveringen',
        howTo: [{ step: 'Kom tomatsuppen i varme skåle og drys lidt gremolata på toppen. Server med resten af gremolataen og flute.' }],
      },
    ],
  },

  // Creme brulé
  {
    id: 3,

    type: 'dessert',
    category: '/assets/dessert_icon.svg',
    categoryAltText: 'dessert ikon',

    image: '/assets/recipe-img/creme-brulee.jpg',
    imageAltText: 'creme brulee',

    title: 'Creme brulee',
    shortDescription:
      'Creme brulee er en af de klassiske franske desserter, der består af fløde, vanilje, æggeblommer og sukker afsluttet med et tyndt låg af sprødt brændt sukker.',
    description:
      'Creme brulé er en af de klassiske franske desserter, der består af fløde, vanilje, æggeblommer og sukker afsluttet med et tyndt låg af             sprødt brændt sukker. Creme brulé betyder brændt creme - og det er jo lige hvad creme brulé er. Først bages cremen til creme bruléen i ovnen og så køles den ned. Den kolde creme drysses så med et tyndt lag sukker, som du karamelliserer med fx med en gasbrænder. Voila - så er din creme brulé klar til servering!',

    time: '25',
    person: '4',
    language: 'Fransk',
    ingredients: [
      {
        ingredientsTitle: 'Creme brulé',
        list: [
          { name: 'Æggeblommer', amount: '4', type: 'stk' },
          { name: 'Sukker', amount: '85', type: 'g' },
          { name: 'Vaniljestang - kornene heraf', amount: '½', type: 'stk' },
          { name: 'Piskefløde', amount: '¼', type: 'liter' },
          { name: 'Sødmælk', amount: '1', type: 'dl' },
          { name: 'sukker', amount: '1', type: 'spsk' },
        ],
      },
    ],

    howToList: [
      {
        howToTitle: 'Creme brulé',
        howTo: [
          { step: 'Rør æggeblommer, sukker og vaniljekorn sammen med en ske. Rør herefter fløde og mælk i æggeblandingen.' },
          { step: 'Sigt blandingen og fordel den i 4 ovnfaste skåle (a ca. 2 dl). Stil skålene på en bageplade og bag dem midt i ovnen.' },
          { step: 'Cremen skælver når du tager den ud af ovnen, men sætter sig når den er afkølet.' },
          { step: 'Stil creme brulérne i køleskabet i mindst 3 timer - uden at dække dem til.' },
        ],
      },
      {
        howToTitle: 'Ved serveringen',
        howTo: [
          { step: 'Drys de iskolde creme bruléer med sukker og brænd dem med en gasbrænder til sukkeret er smeltet og har taget farve.' },
          { step: 'Server straks.' },
        ],
      },
      {
        howToTitle: 'Bagetid',
        howTo: [{ step: 'ca. 50 min. ved 125° - traditionel ovn.' }],
      },
    ],
  },

  {
    id: 4,

    type: 'dinner',
    category: '/assets/dinner_icon.svg',
    categoryAltText: 'dinner ikon',

    image: '/assets/recipe-img/placeholder.jpg',
    imageAltText: 'Wok med kylling, nudler og grøntsager',

    title: 'Wok med kylling, nudler og grøntsager',
    description:
      'Wok med kylling, nudler og grøntsager - en dejlig asiatisk inspireret wokret med masser af grønt og sprød topping af ristede cashewnødder og friske forårsløg. Når du har lyst til wok med kylling, kan du anvende de grøntsager du har i køleskabet - og smage til med dine yndlingskrydderier. Denne opskrift på wok med nudler giver dig et udgangspunkt at starte med, og pludselig har du måske din helt egen signaturopskrift på nudler med kylling.',
    shortDescription:
      'Wok med kylling, nudler og grøntsager - en dejlig asiatisk inspireret wokret med masser af grønt og sprød topping af ristede cashewnødder og friske forårsløg. ',

    time: '30',
    person: '4',
    language: 'Japansk',

    ingredients: [
      {
        ingredientsTitle: 'Wok med kylling, nudler og grøntsager',
        list: [
          { name: 'Rapsolie', amount: '½', type: 'spsk' },
          { name: 'Små gulerødder i grove stykker', amount: '200', type: 'g' },
        ],
      },
    ],

    howToList: [
      {
        howToTitle: 'Creme brulé',
        howTo: [
          { step: 'Rør æggeblommer, sukker og vaniljekorn sammen med en ske. Rør herefter fløde og mælk i æggeblandingen.' },
          { step: 'Sigt blandingen og fordel den i 4 ovnfaste skåle (a ca. 2 dl). Stil skålene på en bageplade og bag dem midt i ovnen.' },
          { step: 'Cremen skælver når du tager den ud af ovnen, men sætter sig når den er afkølet.' },
          { step: 'Stil creme brulérne i køleskabet i mindst 3 timer - uden at dække dem til.' },
        ],
      },
      {
        howToTitle: 'Ved serveringen',
        howTo: [
          { step: 'Drys de iskolde creme bruléer med sukker og brænd dem med en gasbrænder til sukkeret er smeltet og har taget farve.' },
          { step: 'Server straks.' },
        ],
      },
      {
        howToTitle: 'Bagetid',
        howTo: [{ step: 'ca. 50 min. ved 125° - traditionel ovn.' }],
      },
    ],
  },

  {
    id: 5,

    type: 'lunch',
    category: '/assets/lunch_icon.svg',
    categoryAltText: 'lunch ikon',

    image: '/assets/recipe-img/placeholder.jpg',
    imageAltText: 'Mozzarella sticks',

    title: 'Mozzarella sticks',
    shortDescription:
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

    image: '/assets/recipe-img/placeholder.jpg',
    imageAltText: 'Belgiske vafler',

    title: 'Belgiske vafler',
    shortDescription:
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

    image: '/assets/recipe-img/placeholder.jpg',
    imageAltText: 'Muffins med chokoladestykker',

    title: 'Muffins med chokoladestykker',
    shortDescription: 'Muffins er betegnelsen for en meget populær kage, som er bagt i en lille, rund portionsform - og der findes et utal af varianter.',

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

    image: '/assets/recipe-img/placeholder.jpg',
    imageAltText: 'Spaghetti Carbonara',

    title: 'Spaghetti Carbonara',
    shortDescription:
      'Spaghetti Carbonara - næsten som at sidde på en italiensk restaurant. Vi foreslår en tomatsalat til Spaghetti Cabonara. Det ville de nok ikke gøre i Italien, de ville spise salaten bagefter.',

    time: '45',
    person: '4',
    language: 'Italiensk ',

    page: 'opskrifter/spaghetti-carbonara.html',
  },
];

export default recipeData;
