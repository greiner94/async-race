import '../assets/scss/style.scss';
import '../index.html';

import createCarForm from './createCarForm';
import generateCars from './generateCars';
import pageSwitcher from './pageSwitcher';
import renderCarsList from './renderCarsList';
import renderGarage from './renderGarage';
import resetRace from './resetRace';
import startRace from './startRace';
import sortingWinners from './winnerResults/sortingWinners';
import winnersRendering from './winnerResults/winnersRendering';

renderGarage();
renderCarsList();
createCarForm();
generateCars();
startRace();
resetRace();
pageSwitcher();
winnersRendering();
sortingWinners();
