function carAnimation(id: number, velocity: number) {
  const carList = document.querySelectorAll('.car-elem') as NodeListOf<HTMLElement>;
  const roadElem = document.querySelector('.car-elem__start') as HTMLElement;
  const roadLength = parseInt(window.getComputedStyle(roadElem).getPropertyValue('width'));
  let reqId = 0;
  let carImg = document.createElement('div');
  carList.forEach((carElem) => {
    if (carElem.getAttribute('data-id') == id.toString()) {
      carImg = carElem.querySelector('.car-elem__car') as HTMLDivElement;
      if (velocity == 0) {
        carImg.setAttribute('stop', 'true');
      } else {
        carImg.removeAttribute('stop');
      }
      animateCar();
    }
  });

  function animateCar() {
    reqId = requestAnimationFrame(animateCar);
    const left = parseInt(carImg.style.left || '0');
    if (carImg.getAttribute('stop')) {
      cancelAnimationFrame(reqId);
      carImg.style.left = '0px';
      return;
    }
    if (left < roadLength - 110) {
      carImg.style.left = left + velocity * (roadLength / 20000) + 'px';
    } else {
      cancelAnimationFrame(reqId);
    }
  }
}

export default carAnimation;
