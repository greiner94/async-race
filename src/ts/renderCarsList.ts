import finishImg from '../assets/img/finish.png';
import carImg from './carImg';
import removeCarFromList from './removeCarFromList';
import getAllCars from './services/getAllCars';
import { Icar } from './types';
import updateCarFromList from './updateCarFromList';

function renderCarsList() {
  const carsWrapper = document.querySelector('.list__cars') as HTMLElement;
  let carsAmount = 0;
  let carsHtml = '';

  getAllCars().then((res: Icar[]) => {
    carsAmount = res.length;
    res.forEach(({ id, name, color }) => {
      carsHtml += `
      <div class="car-elem" data-id="${id}">
        <div class="car-elem__controls">
          <button class="btn btn_select">select</button>
          <button class="btn btn_remove">remove</button>
          <div class="car-elem__name">${name}</div>
        </div>
        <div class="car-elem__race">
          <div class="car-elem__btns">
            <button class="car-elem__btn">A</button>
            <button class="car-elem__btn car-elem__btn_red">B</button>
          </div>
          <div class="car-elem__start">
            <div class="car-elem__car">
              ${carImg(color)}
            </div>
            <div class="car-elem__finish">
              <img src="${finishImg}" alt="finish">
            </div>
          </div>
        </div>
      </div>
      `;
    });
    carsWrapper.innerHTML = carsHtml;

    (document.querySelector('.list__title') as HTMLElement).innerHTML = `Garage (${carsAmount})`;
    removeCarFromList();
    updateCarFromList();
  });
}

export default renderCarsList;
