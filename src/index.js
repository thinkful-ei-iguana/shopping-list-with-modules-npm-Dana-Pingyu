import $ from 'jquery';
import shoppingList from './scripts/shopping-list.js';
import './styles/index.css';


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
