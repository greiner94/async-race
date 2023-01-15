import carAnimation from './carAnimation';
import startDrive from './services/startDrive';
import startEngine from './services/startEngine';

function startStopCar() {
  const startBtns = document.querySelectorAll('.car-elem__btn_start') as NodeListOf<HTMLButtonElement>;
  const stopBtns = document.querySelectorAll('.car-elem__btn_stop') as NodeListOf<HTMLButtonElement>;

  startBtns.forEach((startBtn) => {
    startBtn.addEventListener('click', () => {
      if (!startBtn.getAttribute('disabled')) {
        const parentElement = startBtn.closest('.car-elem') as HTMLElement;
        const carId = Number(parentElement.getAttribute('data-id'));
        const stopBtn = parentElement.querySelector('.car-elem__btn_stop') as HTMLButtonElement;

        startBtn.setAttribute('disabled', 'true');
        stopBtn.removeAttribute('disabled');

        startEngine(carId, 'started').then((res) => {
          startDrive(carId);
          carAnimation(carId, res.velocity);
        });
      }
    });
  });
  stopBtns.forEach((stopBtn) => {
    stopBtn.addEventListener('click', () => {
      const parentElement = stopBtn.closest('.car-elem') as HTMLElement;
      const carId = Number(parentElement.getAttribute('data-id'));
      const startBtn = parentElement.querySelector('.car-elem__btn_start') as HTMLButtonElement;

      stopBtn.setAttribute('disabled', 'true');
      startBtn.removeAttribute('disabled');

      startEngine(carId, 'stopped').then(() => {
        carAnimation(carId, 0);
      });
    });
  });
}

export default startStopCar;
