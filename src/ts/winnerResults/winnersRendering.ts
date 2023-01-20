import carImg from '../carImg';
import pagination from '../pagination';
import getAllCars from '../services/getAllCars';
import getAllWinners from '../services/winners/getAllWinners';

async function winnersRendering(sortType?: 'time' | 'wins', sortOrder?: 'ASC' | 'DESC') {
  const winnersList = await getAllWinners(sortType, sortOrder).then((res) => res);
  const carsList = await getAllCars().then((res) => res);

  const winnersFullInfo = winnersList.map((winner) => {
    const carInfo = carsList.filter((carInfo) => carInfo.id == winner.id)[0];
    return { ...winner, ...carInfo };
  });

  const winnerWrapper = document.querySelector('.win-table__body-wrapper') as HTMLElement;
  let winnerWrapperHtml = '';
  winnersFullInfo.forEach(({ name, color, time, wins }, index) => {
    winnerWrapperHtml += `
      <div class="win-table__body">
        <div class="win-table__body-elem">
          ${index + 1}
        </div>
        <div class="win-table__body-elem win-table__img">
          ${carImg(color)}
        </div>
        <div class="win-table__body-elem">
          ${name}
        </div>
        <div class="win-table__body-elem">
          ${wins}
        </div>
        <div class="win-table__body-elem">
          ${time}
        </div>
      </div>
  `;
  });
  winnerWrapper.innerHTML = winnerWrapperHtml;

  const winnersAmount = winnersFullInfo.length;
  (document.querySelector('.winners .list__title span') as HTMLElement).textContent = winnersAmount.toString();

  pagination(
    '.win-table__body-wrapper',
    '.winners #cars-pagination .btn_back',
    '.winners #cars-pagination .btn_next',
    '.winners .list__page span',
    10
  );
}

export default winnersRendering;
