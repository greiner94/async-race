function sortingLoadSaved(): { savedSortType: 'time' | 'wins'; savedSortOrder: 'ASC' | 'DESC' } {
  const winsSortBtn = document.querySelector('#winner-head-wins') as HTMLElement;
  const timeSortBtn = document.querySelector('#winner-head-time') as HTMLElement;
  let res: { savedSortType: 'time' | 'wins'; savedSortOrder: 'ASC' | 'DESC' } = {
    savedSortType: 'time',
    savedSortOrder: 'ASC',
  };
  [winsSortBtn, timeSortBtn].forEach((btn, index) => {
    const sortType = index == 0 ? 'wins' : 'time';
    switch (btn.getAttribute('sort-order')) {
      case 'DESC':
        res = { savedSortType: sortType, savedSortOrder: 'DESC' };
        // winnersRendering(sortType, 'DESC');
        break;
      case 'ASC':
        res = { savedSortType: sortType, savedSortOrder: 'ASC' };
        // winnersRendering(sortType, 'ASC');
        break;
    }
  });
  return res;
}

export default sortingLoadSaved;
