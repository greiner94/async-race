import winnerResults from './winnerResults';

function pageSwitcher() {
  const garageBtn = document.querySelector('#garage-page');
  const winnerBtn = document.querySelector('#winner-page');

  garageBtn?.addEventListener('click', switching);
  winnerBtn?.addEventListener('click', switching);

  function switching(event: Event) {
    const target = event.target as HTMLElement;
    const garagePage = document.querySelector('.garage') as HTMLElement;
    const winnerPage = document.querySelector('.winners') as HTMLElement;
    if (target == winnerBtn) {
      garagePage?.classList.add('hide');
      winnerPage?.classList.remove('hide');
      winnerResults();
    } else {
      garagePage?.classList.remove('hide');
      winnerPage?.classList.add('hide');
    }
  }
}

export default pageSwitcher;
