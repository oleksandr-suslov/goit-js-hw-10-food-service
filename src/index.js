import './sass/main.scss';
import recipeCard from './templates/card-recipe.hbs'
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
// const cardsMarkup = createRecipeCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', recipeCard(menu));

// function createRecipeCardsMarkup(menu) {
//     return menu.map(recipeCard).join('');
// }