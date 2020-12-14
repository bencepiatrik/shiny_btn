const btn = document.querySelector('button');
const btnContainer = document.querySelector('.btn-container');
const shadow = document.querySelector('.shadow');

btn.addEventListener('mouseover', () => {
  btnContainer.style.opacity = '0';
  shadow.style.left = "-75%";
  shadow.style.top = "-75%";
})

btn.addEventListener('mouseout', () => {
  btnContainer.style.opacity = '1';
  shadow.style.left = "54%";
  shadow.style.top = "52%";
})