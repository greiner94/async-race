import renderCarsList from './renderCarsList';
import deleteCar from './services/deleteCar';

function removeCarFromList() {
  const deleteBtns = document.querySelectorAll('.btn_remove') as NodeListOf<HTMLButtonElement>;
  deleteBtns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', () => {
      const id = btn.closest('.car-elem')?.getAttribute('data-id') || 0;
      deleteCar(+id).then(renderCarsList);
    });
  });
}

export default removeCarFromList;
