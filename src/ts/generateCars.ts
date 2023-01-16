import createCar from './services/createCar';
import renderCarsList from './renderCarsList';

const carNameList1 = ['Aston', 'Bmw', 'Tesla', 'Mercedes', 'Toyota', 'Mazda', 'Volvo', 'Suzuki', 'Honda', 'Ford'];
const carNameList2 = ['DB9', 'X5', 'Model X', 'Benz', 'Corolla', 'CX5', 'XC90', 'Vitara', 'Civic', 'Cuga'];

function generateName(carNameList1: string[], carNameList2: string[]) {
  const randomizeListName1 = carNameList1.sort(() => Math.random() - 0.5);
  const randomizeListName2 = carNameList2.sort(() => Math.random() - 0.5);
  return randomizeListName1[0] + ' ' + randomizeListName2[0];
}
function generateColor() {
  const possibleSymbolList = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const randomizeSymbolList = possibleSymbolList.sort(() => Math.random() - 0.5);
  const generatedNewColor = '#' + randomizeSymbolList.filter((symbol, index) => index < 6).join('');
  return generatedNewColor;
}

function generateCars() {
  const createBtn = document.querySelector('#create-btn') as HTMLElement;

  createBtn.addEventListener('click', () => {
    const PromiseArr = [];

    for (let i = 0; i < 100; i++) {
      PromiseArr.push(createCar(generateName(carNameList1, carNameList2), generateColor()));
    }
    Promise.all(PromiseArr).then(() => {
      renderCarsList();
    });
  });
}

export default generateCars;
