import carAnimation from './carAnimation';
import getAllCars from './services/getAllCars';
import startDrive from './services/startDrive';
import startEngine from './services/startEngine';
import { IstartEngine } from './types';
function startRace() {
  const raceBtn = document.querySelector('#race-btn') as HTMLButtonElement;

  raceBtn.addEventListener('click', async () => {
    const carsArr = await getAllCars().then((res) => res);
    const allCarsId = carsArr.map((car) => car.id);
    const promiseArr: Promise<IstartEngine>[] = [];
    allCarsId.forEach((carId) => {
      promiseArr.push(startEngine(carId, 'started'));
    });
    const carsData = await Promise.all(promiseArr).then((carsData) => carsData);
    carsData.forEach((carInfo, index) => {
      startDrive(allCarsId[index]).catch(() => carAnimation(allCarsId[index], 0));
      carAnimation(allCarsId[index], carInfo.velocity);
    });
  });
}

export default startRace;
