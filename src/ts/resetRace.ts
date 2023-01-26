import carAnimation from './carAnimation';
import startEngine from './services/startEngine';

function resetRace() {
  const resetBtn = document.querySelector('#reset-btn') as HTMLButtonElement;

  resetBtn.addEventListener('click', async () => {
    const carsElems = Array.from(document.querySelectorAll('.car-elem:not(.hide)'));
    const carsIds: number[] = [];
    carsElems.forEach((carElem) => {
      carsIds.push(Number(carElem.getAttribute('data-id')));

      const startBtn = carElem.querySelector('.car-elem__btn_start') as HTMLElement;
      startBtn.removeAttribute('disabled');
      const stopBtn = carElem.querySelector('.car-elem__btn_stop') as HTMLElement;
      stopBtn.setAttribute('disabled', 'true');
    });

    carsIds.forEach((carId) => {
      startEngine(carId, 'stopped').then(() => carAnimation(carId, -1));
    });
  });
}

export default resetRace;
