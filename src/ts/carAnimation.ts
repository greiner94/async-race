function carAnimation(id: number, velocity: number) {
  const carList = document.querySelectorAll('.car-elem:not(.hide)') as NodeListOf<HTMLElement>;
  const roadElem = carList[0].querySelector('.car-elem__start') as HTMLElement;
  const roadLength = parseInt(window.getComputedStyle(roadElem).getPropertyValue('width'));
  let reqId = 0;
  let carImg = document.createElement('div');
  carList.forEach((carElem) => {
    if (carElem.getAttribute('data-id') == id.toString()) {
      carImg = carElem.querySelector('.car-elem__car') as HTMLDivElement;
      switch (velocity) {
        case -1:
          carImg.setAttribute('data-status', 'stop');
          break;
        case 0:
          carImg.setAttribute('data-status', 'broke');
          break;
        default:
          carImg.setAttribute('data-status', 'drive');
      }
      animateCar();
    }
  });

  function animateCar() {
    reqId = requestAnimationFrame(animateCar);
    const left = parseInt(carImg.style.transform.slice(11, carImg.style.transform.indexOf('px')) || '0');
    switch (carImg.getAttribute('data-status')) {
      case 'stop':
        cancelAnimationFrame(reqId);
        carImg.style.transform = 'translateX(0px)';
        break;
      case 'broke':
        cancelAnimationFrame(reqId);
        break;
      case 'drive':
        if (left < roadLength - 110) {
          carImg.style.transform = `translateX(${left + (velocity * roadLength * 1.2) / 50000}px)`;
        } else {
          carImg.setAttribute('data-status', 'finish');
          cancelAnimationFrame(reqId);
        }
    }
  }
}

export default carAnimation;
