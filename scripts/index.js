/* filter function */
const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item) {
  changeActivePosition(item);
  for (let i = 0; i < allCategoryPosts.length; i++) {
    if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
      allCategoryPosts[i].style.display = 'flex';
    } else {
      allCategoryPosts[i].style.display = 'none';
    }
  }
}

function changeActivePosition(activeItem) {
  for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].classList.remove('active');
  }
  activeItem.classList.add('active');
}

// Burgermenu
const burgermenu = document.querySelector('.burgermenu_icon');
const navMenu = document.querySelector('.burgermenu_container');

// Open and close the burgermenu, when you click on it
burgermenu.addEventListener('click', mobileMenu);

function mobileMenu() {
  burgermenu.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// hide the burgermenu when you click on a menu link
const navLink = document.querySelectorAll('.nav_link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  burgermenu.classList.remove('active');
  navMenu.classList.remove('active');
}
