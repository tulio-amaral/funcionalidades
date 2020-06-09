const buttons = [...document.getElementsByClassName('btn')];

buttons.forEach(button =>{
  button.addEventListener('click', onClick);
});

function onClick(event){
  const button = event.target;

  const appendRipple = document.createElement('div');
  appendRipple.classList.add('ripple');
  appendRipple.style.height = appendRipple.style.width = button.offsetWidth * 2 +'px';

  let x = event.clientX - button.offsetLeft - button.offsetWidth,
      y = event.clientY - button.offsetTop - button.offsetWidth;

  appendRipple.style.left = x + 'px';
  appendRipple.style.top = y +'px';

  button.appendChild(appendRipple);

  setTimeout(() => {
    button.removeChild(appendRipple);
  }, 500);
  
}
