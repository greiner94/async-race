import '../assets/scss/style.scss';
import '../index.html';

import createCarForm from './createCarForm';
import generateCars from './generateCars';
import renderCarsList from './renderCarsList';
import renderGarage from './renderGarage';
import resetRace from './resetRace';
import startRace from './startRace';

renderGarage();
renderCarsList();
createCarForm();
generateCars();
startRace();
resetRace();
