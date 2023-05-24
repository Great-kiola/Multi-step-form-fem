let numbers = document.querySelectorAll('.number1');
let nextBtn = document.querySelector('.nextBtn');
let toggle = document.querySelector('.toggle');
let prevBtn = document.querySelector('.prevBtn');

let yearly = document.querySelector('.yearly');
let monthly = document.querySelector('.monthly');

let step1 = document.querySelector('.Step1');
let step2 = document.querySelector('.step2');

let planBox = document.querySelector('.planBox');

let errorDiv1 = document.querySelector('.errorMsg1');
let errorDiv2 = document.querySelector('.errorMsg2');
let errorDiv3 = document.querySelector('.errorMsg3');


let eAddressInput = document.querySelector('#email');
let nameInput = document.querySelector('#name');
let phoneInput = document.querySelector('#phoneNumber');


nextBtn.addEventListener('click', () => {

    function submit(){
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
        if(eAddressInput.value.match(validRegex)){
            errorDiv2.style.display = 'none';
            step1.style.display = 'none';
            step2.style.display = 'block';
            return true;
        }else {
            errorDiv2.style.display = 'block';
        }

        if (!){}



    }

    submit();

});

prevBtn.addEventListener('click', () => {
    step1.style.display = 'flex';
    step2.style.display = 'none';
});


toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggle.classList.toggle('after');
});

planBox.addEventListener('click', () => {
    alert('clicked!')
    planBox.classList.add('active');
});





// forEach( (item) => {item.classList.add('active');}