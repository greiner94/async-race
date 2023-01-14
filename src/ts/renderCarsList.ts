import finishImg from '../assets/img/finish.png';
import carImg from './carImg';
import getAllCars from './services/getAllCars';
import { Icar } from './types';

function renderCarsList() {
  const carsWrapper = document.querySelector('.list__cars') as HTMLElement;
  let carsHtml = '';
  getAllCars().then((res: Icar[]) => {
    res.forEach((car) => {
      carsHtml += `
      <div class="car-elem">
        <div class="car-elem__controls">
          <button class="btn btn_select">select</button>
          <button class="btn btn_remove">remove</button>
          <div class="car-elem__name">${car.name}</div>
        </div>
        <div class="car-elem__race">
          <div class="car-elem__btns">
            <button class="car-elem__btn">A</button>
            <button class="car-elem__btn car-elem__btn_red">B</button>
          </div>
          <div class="car-elem__start">
            <div class="car-elem__car">
              ${carImg(car.color)}
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
    document.querySelector('.car-elem__car img');
  });
}

export default renderCarsList;
