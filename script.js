let numbers = document.querySelectorAll('.number1');
let nextBtn = document.querySelector('.nextBtn');
let toggle = document.querySelector('.toggle');
let prevBtn = document.querySelector('.prevBtn');

let yearly = document.querySelector('.yearly');
let monthly = document.querySelector('.monthly');

let step1 = document.querySelector('.Step1');
let step2 = document.querySelector('.step2');

nextBtn.addEventListener('click', () => {
    step1.style.display = 'none';
    step2.style.display = 'block';
});

prevBtn.addEventListener('click', () => {
    step1.style.display = 'block';
    step2.style.display = 'none';
});


toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggle.classList.toggle('after');
    
    if (yearly.style.fontWeight = '400'){
        yearly.style.fontWeight = '700';
        yearly.style.color = 'red';
    } else {
        yearly.style.fontWeight = '400';
    }
});


// forEach( (item) => {item.classList.add('active');}