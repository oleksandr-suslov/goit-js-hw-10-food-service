import './sass/main.scss';
import recipeCard from './templates/card-recipe.hbs'
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuContainer: document.querySelector('.js-menu'),
  switch: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
}

refs.menuContainer.insertAdjacentHTML('beforeend', recipeCard(menu));
refs.body.classList.add(Theme.LIGHT);
refs.switch.addEventListener('change', changeTheme);

function changeTheme() {
    if (refs.switch.checked) {
    refs.body.classList.add(Theme.DARK)
    localStorage.setItem('theme', Theme.DARK);
    } else {
    refs.body.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
    }
}

function getSaveTheme() {
    if (localStorage.getItem('theme') !== null) {
        refs.body.classList.add(Theme.DARK);
        refs.switch.setAttribute('checked', true);
    }
    else {
        refs.body.classList.remove(Theme.DARK);
    }
}
  getSaveTheme()