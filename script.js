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




// steps.forEach((step) => {
//     const nextBtn = step.querySelector(".nextBtn");
//     const prevBtn = step.querySelector(".prevBtn");

//     if (prevBtn){
//         prevBtn.addEventListener("click", () => {
//             document.querySelector(`.numbers-${currentStep}`).style.display = "none";
//             currentStep--;
//             document.querySelector(`.numbers-${currentStep}`).style.display = "flex";
//             circleStep[currentCircle].classList.remove("active");
//             currentCircle--;
//         });
//     }

//     nextBtn.addEventListener("click", () => {
//         document.querySelector(`.numbers-${currentStep}`).style.display = "none";

//         if (currentStep < 5 && validateForm()){
//             currentStep++;
//             currentCircle++;
//             // setTotal();
//         }

//         document.querySelector(`.numbers-${currentStep}`).style.display = "flex";
//         circleStep[currentCircle].classList.add("active");
//         summary(obj);
//     });
// });

// function summary(obj) {
//     const planName = document.querySelector(".chosenPlans");
//     const planPrice = document.querySelector(".chosenPrice");
    
//     planPrice.innerHTML = `${obj.price.innerText}`;
//     planName.innerHTML = `${obj.plan.innerText} (${
//         obj.kind ? "yearly" : "monthly"
//     })`;


// }

// function validateForm() {
//     // let valid = true;

//     // Check if the name is valid.
//     if (!nameInput.value) {
//         errorDiv1.style.display = "block";
//     } else {
//         errorDiv1.style.display = "none";
//     }
    
//     // Form validation for email addresses
//     let validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
//     if (eAddressInput.value.match(validRegex)) {
//         errorDiv2.style.display = "none";
//     } else {
//         errorDiv2.style.display = "block";
//     }
    
//     // Checks if phone number is valid
//     if (!phoneInput.value) {
//         errorDiv3.style.display = "block";
//     } else {
//         errorDiv3.style.display = "none";
//     }
// }


planBox.forEach((allPlans) => {

    allPlans.addEventListener("click", (e) => {
        e.preventDefault();


        allPlans.classList.toggle('active');
    })
});



































// nextBtn.addEventListener("click", function handleSubmit(e) {
//     e.preventDefault();
    
//     // Check if the name is valid.
//         if (!nameInput.value) {
//             errorDiv1.style.display = "block";
//         } else {
//             errorDiv1.style.display = "none";
//         }
    
//         // Form validation for email addresses
//         let validRegex =
//             /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
//         if (eAddressInput.value.match(validRegex)) {
//             errorDiv2.style.display = "none";
//         } else {
//             errorDiv2.style.display = "block";
//         }
    
//         // Checks if phone number is valid
//         if (!phoneInput.value) {
//             errorDiv3.style.display = "block";
//         } else {
//             errorDiv3.style.display = "none";
//         }
    
//         // numbers.forEach(num => num.classList.remove("active"));
    
//         step1.style.display = "none";
//         step2.style.display = "block";
    
//     });





// prevBtn.addEventListener("click", () => {
//     step1.style.display = "flex";
//     step2.style.display = "none";
// });

// toggle.addEventListener("click", (e) => {
//     e.preventDefault();
//     toggle.classList.toggle("after");
// });

// planBox.forEach(allPlans => {
    
//     allPlans.addEventListener("click", () => {
//         allPlans.classList.add('active');
//     });
// });

// for (let allPlans of planBox) {
//     allPlans.addEventListener("click", () => {
//         allPlans.classList.add('active');
//     });
// }

// planBox.addEventListener("click", () => {
//     alert("clicked!");
//     planBox.classList.add("active");
// });

// nextBtn2.addEventListener("click", () => {
//     step2.style.display = "none";
//     step3.style.display = "block";
// });

// prevBtn3.addEventListener("click", () => {
//     step2.style.display = "block";
//     step3.style.display = "none";
// });

// nextBtn3.addEventListener("click", () => {
//     step4.style.dis = "block";
//     step3.style.display = "none";
// });

// prevBtn4.addEventListener("click", () => {
//     step4.style.display = "none";
//     step3.style.display = "block";
// });

// nextBtn4.addEventListener("click", () => {
//     step5.style.disp = "block";
//     step4.style.display = "none";
// });

// if (!nameInput.value){
//     errorDiv1.style.display = 'none';
// }

// errorDiv1.style.display = 'block';
// errorDiv2.style.display = 'block';

// errorDiv1.style.display = 'none';
// errorDiv2.style.display = 'none';

// forEach( (item) => {item.classList.add('active');});


// Handles what happens when you click the first submit button
// nextBtn.addEventListener("click", () => {
//     function submit() {

//         // Check if the name is valid.
//         if (!nameInput.value){
//             errorDiv1.style.display = "block";
//         } else {
//             errorDiv1.style.display = "none";
//         }

//         // Form validation for email addresses
//         let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//         if (eAddressInput.value.match(validRegex)) {
//             errorDiv2.style.display = "none";
//         } else {
//             errorDiv2.style.display = "block";
//         }

//         // Checks if phone number is valid
//         if (!phoneInput.value){
//             errorDiv3.style.display = "block";
//         } else {
//             errorDiv3.style.display = "none";
//         }

//     }

//     step1.style.display = "none";
//     step2.style.display = "block";

//     submit();

// });


