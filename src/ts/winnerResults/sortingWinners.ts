import winnersRendering from './winnersRendering';

function sortingWinners() {
  const winsSortBtn = document.querySelector('#winner-head-wins') as HTMLElement;
  const timeSortBtn = document.querySelector('#winner-head-time') as HTMLElement;
  winsSortBtn.addEventListener('click', bindSort);
  timeSortBtn.addEventListener('click', bindSort);

  function bindSort(event: Event) {
    const target = event.target as HTMLElement;
    const sortType = target.getAttribute('id') == 'winner-head-wins' ? 'wins' : 'time';
    sortType == 'time' ? winsSortBtn.removeAttribute('sort-order') : timeSortBtn.removeAttribute('sort-order');
    switch (target.getAttribute('sort-order')) {
      case 'ASC':
        winnersRendering(sortType, 'DESC');
        target.setAttribute('sort-order', 'DESC');
        break;
      case 'DESC':
        winnersRendering(sortType, 'ASC');
        target.setAttribute('sort-order', 'ASC');
        break;
      default:
        winnersRendering(sortType, 'DESC');
        target.setAttribute('sort-order', 'DESC');
        break;
    }
  }
}

export default sortingWinners;
