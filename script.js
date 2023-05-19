let numbers = document.querySelectorAll('.number1');
let nextBtn = document.querySelector('.nextBtn');


let step1 = document.querySelector('.Step1');

nextBtn.addEventListener('click', () => {
    // step1.style.display = 'none';
    numbers.classList.add('active');
});



// forEach( (item) => {item.classList.add('active');}