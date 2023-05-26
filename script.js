let numbers = document.querySelectorAll('.number1');
let nextBtn = document.querySelector('.nextBtn');
let toggle = document.querySelector('.toggle');
let prevBtn = document.querySelector('.prevBtn');

let yearly = document.querySelector('.yearly');
let monthly = document.querySelector('.monthly');

let step1 = document.querySelector('.Step1');
let step2 = document.querySelector('.step2');
let step3 = document.querySelector('.step3');
let step4 = document.querySelector('.step4');
let step5 = document.querySelector('.step5');


let planBox = document.querySelector('.planBox');


let errorDiv1 = document.querySelector('.errorMsg1');
let errorDiv2 = document.querySelector('.errorMsg2');
let errorDiv3 = document.querySelector('.errorMsg3');


let eAddressInput = document.getElementById('email');
let nameInput = document.getElementById('name');
let phoneInput = document.getElementById('phoneNumber');


let nextBtn2 = document.getElementById('nextBtn2');
let prevBtn3 = document.getElementById('prevBtn3');

let nextBtn3 = document.getElementById('nextBtn3');
let prevBtn4 = document.getElementById('prevBtn4');



nextBtn.addEventListener('click', () => {

    function submit(){
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
        if(eAddressInput.value.match(validRegex)) {
            errorDiv2.style.display = 'none';
            step1.style.display = 'none';
            step2.style.display = 'block';
            return true;
        }else {

            errorDiv2.style.display = 'block';
        }
    }

    submit();

    // errorDiv1.style.display = 'block';
    // errorDiv2.style.display = 'block';

    // errorDiv1.style.display = 'none';
    // errorDiv2.style.display = 'none';

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

nextBtn2.addEventListener('click', () => {
    step2.style.display = 'none';
    step3.style.display = 'block';
});

prevBtn3.addEventListener('click', () => {
    step2.style.display = 'block';
    step3.style.display = 'none';
});

nextBtn3.addEventListener('click', () => {
    step4.style.display = 'block';
    step3.style.display = 'none';
});

prevBtn4.addEventListener('click', () => {
    step4.style.display = 'none';
    step3.style.display = 'block';
});




// if (!nameInput.value){
//     errorDiv1.style.display = 'none';
// }




// forEach( (item) => {item.classList.add('active');}