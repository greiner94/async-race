import setWinner from './services/winners/setWinner';

function checkAndSetWinner(id: number, time: number) {
  const winnerMsg = document.querySelector('.winner-message') as HTMLElement;
  if (winnerMsg.classList.contains('hide') && !winnerMsg.getAttribute('active')) {
    const carsElems = Array.from(document.querySelectorAll('.car-elem:not(.hide)'));
    let carName = '';

    carsElems.forEach((carElem) => {
      if (Number(carElem.getAttribute('data-id')) == id) {
        carName = carElem.querySelector('.car-elem__name')?.textContent || '';
      }
    });
    const [nameElem, timeElem] = winnerMsg.querySelectorAll('span');
    nameElem.textContent = carName;
    timeElem.textContent = time.toString();

    winnerMsg.classList.remove('hide');
    setTimeout(() => {
      winnerMsg.classList.add('hide');
    }, 3000);
    setTimeout(() => {
      winnerMsg.removeAttribute('active');
    }, 10000);
    winnerMsg.setAttribute('active', 'true');
    setWinner(id, time);
  }
}

export default checkAndSetWinner;
