let suggestions = [
  'amerikanske pandekager',
  'quesadilla i lag',
  'tomatsuppe med peberfrugt og sprød gremolata',
  'creme brulee',
  'wok med kylling nudler og grøntsager',
  'mozzarella sticks',
  'belgiske vafler',
  'muffins med chokoladestykker',
  'spaghetti carbonara',
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
      webLink = `opskrifter/${encodeURIComponent(selectData)}.html`;
      linkTag.setAttribute('href', webLink);
      linkTag.click();
    };
    emptyArray = suggestions.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li onclick="location.href='opskrifter/${data.replace(
        / /g,
        '-'
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

export default suggestions;
