let numbers = document.querySelector(".numbers");




let yearly = document.querySelector(".yearly");
let monthly = document.querySelector(".monthly");


const steps = document.querySelectorAll(".stp");
// let step1 = document.querySelector(".Step1");
// let step2 = document.querySelector(".step2");
// let step3 = document.querySelector(".step3");
// let step4 = document.querySelector(".step4");
// let step5 = document.querySelector(".step5");

let planBox = document.querySelectorAll(".planBox");

let errorDiv1 = document.querySelector(".errorMsg1");
let errorDiv2 = document.querySelector(".errorMsg2");
let errorDiv3 = document.querySelector(".errorMsg3");

let eAddressInput = document.getElementById("email");
let nameInput = document.getElementById("Name");
let phoneInput = document.getElementById("phoneNumber");

let nextBtn2 = document.getElementById("nextBtn2");
let prevBtn3 = document.getElementById("prevBtn3");

let nextBtn3 = document.getElementById("nextBtn3");
let prevBtn4 = document.getElementById("prevBtn4");

let nextBtn4 = document.getElementById("nextBtn4");
let PrevBtn4 = document.getElementById("prevBtn4");

let toggle = document.querySelector(".toggle");
const circleStep = document.querySelectorAll(".numbers");

let nextBtn = document.querySelectorAll(".nextBtn");


let time;
let currentStep = 1;
let currentCircle = 0;

const obj = {
    plan: null,
    kind: null,
    price: null,
}

//Toggle
toggle.addEventListener("click", (e) => {
    e.preventDefault();
    toggle.classList.toggle("after");
});



// PlanBox
planBox.forEach(allPlans => {
    allPlans.addEventListener('click', () => {
        planBox.forEach(allPlans => {
            allPlans.classList.remove('active');
        });

        allPlans.classList.add('active');
    })
});


nextBtn.forEach((nextPart) => {
    nextPart.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

