let suggestions = [
  'Amerikanske pandekager',
  'Quesadilla i lag',
  'Tomatsuppe med sprød gremolata',
  'Creme brulee',
  'Wok med kylling, nudler og grøntsager',
  'Mozzarella sticks',
  'Belgiske vafler',
  'Muffins med chokoladestykker',
  'Spaghetti Carbonara',
];

const searchWrapper = document.querySelector('.search_input');
const inputBox = searchWrapper.querySelector('input');
const suggBox = searchWrapper.querySelector('.autocom_box');
const icon = searchWrapper.querySelector('.search_icon');
let linkTag = searchWrapper.querySelector('a');
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      webLink = `recipes/${encodeURIComponent(selectData)}.html`;
      linkTag.setAttribute('href', webLink);
      linkTag.click();
    };
    emptyArray = suggestions.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li onclick="location.href='recipes/${data.replace(
        / /g,
        '_'
      )}.html';">${data}</li>`);
    });
    searchWrapper.classList.add('active'); //show autocomplete box
    showSuggestions(emptyArray);
  } else {
    searchWrapper.classList.remove('active'); //hide autocomplete box
  }
};

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = `recipes/${encodeURIComponent(selectData)}.html`;
    linkTag.setAttribute('href', webLink);
    linkTag.click();
  };
  searchWrapper.classList.remove('active');
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}
