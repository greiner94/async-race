import renderCarsList from './renderCarsList';
import deleteCar from './services/deleteCar';
import deleteWinner from './services/winners/deleteWinner';

function removeCarFromList() {
  const deleteBtns = document.querySelectorAll('.btn_remove') as NodeListOf<HTMLButtonElement>;
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.closest('.car-elem')?.getAttribute('data-id') || 0;
      deleteCar(+id).then(renderCarsList);
      deleteWinner(+id);
    });
  });
}

export default removeCarFromList;
