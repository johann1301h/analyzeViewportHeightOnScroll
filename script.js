const resetButton = document.querySelector('button');
const graphContainer = document.querySelector('.graphContainer');
let scrollCount = 0;
let scrollPositionOrigin = document.body.scrollTop;
let lastHeight = window.innerHeight;
let hasNotScrolled = true;
function reset() {
  scrollCount = 0;
  scrollPositionOrigin = document.body.scrollTop;
  graphContainer.innerHTML = '';
}
resetButton.addEventListener('click', reset);

function lol() {
  if (hasNotScrolled) {
    scrollPositionOrigin = document.body.scrollTop;
    hasNotScrolled = false;
  }
  let point = document.createElement('DIV');
  point.className = 'point';
  graphContainer.appendChild(point);
  scrollCount += 1;
  point.style.left = scrollCount + 'px';
  //point.style.left = scrollCount + 'px';
  point.style.bottom = window.innerHeight - 5s00 + 'px';

  lastHeight = window.innerHeight;
  window.requestAnimationFrame(lol);
}
window.requestAnimationFrame(lol);
