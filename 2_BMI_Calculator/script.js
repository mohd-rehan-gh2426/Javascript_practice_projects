const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
   const h = height.value;
   const w = weight.value;
   
   button.innerHTML = (w/(h*h)).toFixed(2);
})