const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.switchColors = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.switchColors);
  },
};
startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));
