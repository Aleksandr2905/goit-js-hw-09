function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    
}
