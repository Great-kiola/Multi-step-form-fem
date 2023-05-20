let numbers = document.querySelectorAll('.number1');
let nextBtn = document.querySelector('.nextBtn');
let toggle = document.querySelector('.toggle');


let step1 = document.querySelector('.Step1');

nextBtn.addEventListener('click', () => {
    step1.style.display = 'none';
});


toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggle.classList.toggle('after');
});


// forEach( (item) => {item.classList.add('active');}