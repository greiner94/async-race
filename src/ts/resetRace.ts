import carAnimation from './carAnimation';
import getAllCars from './services/getAllCars';
import startEngine from './services/startEngine';

function resetRace() {
  const resetBtn = document.querySelector('#reset-btn') as HTMLButtonElement;

  resetBtn.addEventListener('click', async () => {
    const carsArr = await getAllCars().then((res) => res);
    const allCarsId = carsArr.map((car) => car.id);
    allCarsId.forEach((carId) => {
      startEngine(carId, 'stopped').then(() => carAnimation(carId, -1));
    });
  });
}

export default resetRace;
