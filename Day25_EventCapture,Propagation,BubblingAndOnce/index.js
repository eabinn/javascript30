const divs = document.querySelectorAll('div');
const btn = document.querySelector('.btn');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

document.body.addEventListener('click', logText, {
  capture: false,
  once: true,
});

divs.forEach((div) =>
  div.addEventListener('click', logText, {
    capture: false,
    once: true,
  })
);

btn.addEventListener('click', () => console.log('CLICK BUTTON!!!'), {
  once: true,
});
