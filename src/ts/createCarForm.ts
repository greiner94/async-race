import renderCarsList from './renderCarsList';
import createCar from './services/createCar';

function createCarForm() {
  const createCarForm = document.querySelector('#form-create') as HTMLElement;
  const nameInput = createCarForm.querySelector('.control__input-text') as HTMLInputElement;
  const colorInput = createCarForm.querySelector('.control__input-color') as HTMLInputElement;

  createCarForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    createCar(nameInput.value, colorInput.value).then(renderCarsList);
    nameInput.value = '';
  });
}

export default createCarForm;
