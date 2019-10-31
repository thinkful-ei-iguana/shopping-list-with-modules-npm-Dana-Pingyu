import $ from 'jquery';
import shoppingList from './scripts/shopping-list.js';
import './styles/main.css';


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
