function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    startBtnEl: document.querySelector('[data-start]'),
    stopBtnEl: document.querySelector('[data-stop]'),
    
}

refs.startBtnEl.addEventListener('click', event => {
  refs.startBtnEl.disabled = true;
  refs.stopBtnEl.disabled = false;
  intervalId = setInterval(() => {
  document.body.style.backgroundColor = getRandomHexColor()
  }, 1000);
});

refs.stopBtnEl.addEventListener('click', event => {
  refs.startBtnEl.disabled = false;
  refs.stopBtnEl.disabled = true;
  clearInterval(intervalId);
});