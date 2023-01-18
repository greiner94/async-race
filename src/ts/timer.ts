class Timer {
  oldTime: number;

  constructor() {
    this.oldTime = 0;
  }

  start() {
    this.oldTime = new Date().getTime();
  }

  getTime() {
    return (new Date().getTime() - this.oldTime) / 1000;
  }
}

export default Timer;
