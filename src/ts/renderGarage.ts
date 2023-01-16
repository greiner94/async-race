function renderGarage() {
  const body = document.querySelector('body') as HTMLElement;
  body.innerHTML = `
    <div class="container">
    <div class="control-wrapper">
      <div class="location">
        <button class="btn btn_main">to garage</button>
        <button class="btn btn_main">to winners</button>
      </div>
      <div class="control">
        <form class="control__input-wrapper" id="form-create">
          <input type="text" class="control__input-text" placeholder="car name"></input>
          <input type="color" class="control__input-color"></input>
          <button type="submit" class="btn">create</button>
        </form>
        <form class="control__input-wrapper" id="form-update">
          <input type="text" disabled class="control__input-text" placeholder="car name"></input>
          <input type="color" disabled class="control__input-color"></input>
          <button type="submit" disabled class="btn">update</button>
        </form>
        <div class="control__main-btns">
          <button class="btn btn_main">race</button>
          <button class="btn btn_main">reset</button>
          <button class="btn">generate cars</button>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list__title">Garage (<span>0</span>)</div>
      <div class="list__page">Page #<span>1</span></div>
      <div class="list__cars">
      </div>
      <div class="pagination" id="cars-pagination">
        <button class="btn btn_back">< back</button>
        <button class="btn  btn_next">next ></button>
      </div>
    </div>
  </div>
  `;
}

export default renderGarage;
