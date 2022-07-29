function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

const refs = {
  buttonStartRef: document.querySelector('button[data-start]'),
  buttonStopRef: document.querySelector('button[data-stop]'),
};
let intervalChangeColorId = null;
refs.buttonStartRef.addEventListener('click', onButtonStartClick);
refs.buttonStopRef.addEventListener('click', onButtonStopClick);

function onButtonStartClick() {
  setTimeout(() => {
    changeBodyColor();
    refs.buttonStartRef.disabled = true;
    refs.buttonStopRef.disabled = false;
    intervalChangeColorId = setInterval(changeBodyColor, 1000);
  }, 0);
}

function onButtonStopClick() {
  clearInterval(intervalChangeColorId);
  refs.buttonStartRef.disabled = false;
  refs.buttonStopRef.disabled = true;
}
