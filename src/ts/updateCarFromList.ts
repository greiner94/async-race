import renderCarsList from './renderCarsList';
import getCar from './services/getCar';
import startEngine from './services/startEngine';
import updateCar from './services/updateCar';

function updateCarFromList() {
  const selectBtns = document.querySelectorAll('.btn_select') as NodeListOf<HTMLButtonElement>;
  const nameInput = document.querySelector('#form-update .control__input-text') as HTMLInputElement;
  const colorInput = document.querySelector('#form-update .control__input-color') as HTMLInputElement;
  const submitBtn = document.querySelector('#form-update .btn') as HTMLInputElement;

  selectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idSelectedCar = Number(btn.closest('.car-elem')?.getAttribute('data-id'));

      getCar(idSelectedCar).then(({ id, name, color }) => {
        nameInput.value = name;
        colorInput.value = color;
        submitBtn.setAttribute('data-id', id.toString());

        nameInput.removeAttribute('disabled');
        colorInput.removeAttribute('disabled');
        submitBtn.removeAttribute('disabled');
      });
    });
  });

  submitBtn.addEventListener('click', (event: Event) => {
    event.preventDefault();

    nameInput.setAttribute('disabled', 'true');
    colorInput.setAttribute('disabled', 'true');
    submitBtn.setAttribute('disabled', 'true');
    const carId = Number(submitBtn.getAttribute('data-id'));
    updateCar(carId, nameInput.value, colorInput.value).then(() => (nameInput.value = ''));
    renderCarsList();
  });
}

export default updateCarFromList;
