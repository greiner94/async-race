import carAnimation from './carAnimation';
import startDrive from './services/startDrive';
import startEngine from './services/startEngine';
import checkAndSetWinner from './checkAndSetWinner';
import { IstartEngine } from './types';
import Timer from './timer';
function startRace() {
  const raceBtn = document.querySelector('#race-btn') as HTMLButtonElement;

  raceBtn.addEventListener('click', async () => {
    const carsElems = Array.from(document.querySelectorAll('.car-elem:not(.hide)'));
    const carsIds: number[] = [];
    carsElems.forEach((carElem) => {
      carsIds.push(Number(carElem.getAttribute('data-id')));

      const startBtn = carElem.querySelector('.car-elem__btn_start') as HTMLElement;
      startBtn.setAttribute('disabled', 'true');
      const stopBtn = carElem.querySelector('.car-elem__btn_stop') as HTMLElement;
      stopBtn.removeAttribute('disabled');
    });
    const promiseArr: Promise<IstartEngine>[] = [];
    carsIds.forEach((carId) => promiseArr.push(startEngine(carId, 'started')));
    const carsData = await Promise.all(promiseArr).then((carsData) => carsData);

    const timer = new Timer();
    timer.start();
    carsData.forEach((carInfo, index) => {
      startDrive(carsIds[index])
        .then(() => checkAndSetWinner(carsIds[index], timer.getTime()))
        .catch(() => carAnimation(carsIds[index], 0));
      carAnimation(carsIds[index], carInfo.velocity);
    });
  });
}

export default startRace;
