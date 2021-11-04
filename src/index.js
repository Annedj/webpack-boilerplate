// Imports
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import { fetchMovies, fillAllMovies } from './movie';
import { initSortable } from './plugins/init_sortable';
import { initSelect2 } from './plugins/init_select2';

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

// Function calls
// fetchMovies('Batman');
initSortable();
initSelect2();

// Selectors
const form = document.querySelector('#search-movies');

// Events
form.addEventListener('submit', fillAllMovies);
