export const recipeDetailData = [
  {
    id: 0,

    title: 'Amerikanske pandekager',
    time: '30',
    person: '4',
    language: 'Amerikansk',
    description:
      'Amerikanske pandekager passer perfekt til både brunch og dessert. Bag de små, tykke amerikanske pandekager i en almindelig pande eller i en blinispande og servér med blåbær, ahornsirup og smør. Det er både nemt og dejligt at hygge sig med at lave amerikanske pandekager. Og det går rigtig hurtigt med at få de amerikanske pandekager spist!',

    category: '/assets/breakfast_icon.svg',
    categoryAltText: 'breakfast ikon',

    image: '/assets/amerikanske-pandekager.jpg',
    imageAltText: 'Amerikanske pandekager',

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
  },
];
