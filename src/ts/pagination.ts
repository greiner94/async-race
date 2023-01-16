function pagination() {
  const listWrapper = document.querySelector('.list__cars') as HTMLElement;
  const listElems = Array.from(listWrapper.children);
  const backBtn = document.querySelector('#cars-pagination .btn_back') as HTMLElement;
  const nextBtn = document.querySelector('#cars-pagination .btn_next') as HTMLElement;
  const pageNumber = document.querySelector('.list__page span') as HTMLElement;
  const maxOnPage = 7;
  let currPage = 0;

  function showElems(page: number) {
    if (currPage + page == 0 || currPage + page - 1 >= listElems.length / maxOnPage) return;
    currPage += page;
    pageNumber.textContent = currPage.toString();
    listElems.forEach((element, index) => {
      if (index > maxOnPage * currPage - 1 || index < maxOnPage * (currPage - 1)) {
        element.classList.add('hide');
      } else {
        element.classList.remove('hide');
      }
    });
  }
  showElems(1);

  nextBtn.addEventListener('click', () => showElems(1));
  backBtn.addEventListener('click', () => showElems(-1));
}

export default pagination;
