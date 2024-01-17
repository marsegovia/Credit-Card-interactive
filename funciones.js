const inputName = document.querySelector("#inp-name");
const inputNumber = document.querySelector("#inp-number");
const inputMonth = document.querySelector("#inp-month");
const inputYear = document.querySelector("#inp-year");
const inputCVC = document.querySelector("#inp-cvc");
const Graciass = document.querySelector("#Ty");
const BotonCont = document.querySelector("#continue");

const cardName = document.querySelector("#Card-name");
const CardNumber = document.querySelector("#Card_Number");
const Cardate = document.querySelector("#Card-month");
const Caryear = document.querySelector("#Card-year");
const Carcvc = document.querySelector("#Card-cvc");
const Form = document.querySelector("#form");

inputName.addEventListener("input", () =>{
    cardName.innerText = inputName.value;

    if(inputName.value.length === 0){
        cardName.innerText = "Martin Sebastian Segovia"
    }
})

inputNumber.addEventListener("input", () =>{
    CardNumber.innerText = inputNumber.value;

    if(inputNumber.value.length === 0){
        CardNumber.innerText = "0000 0000 0000 0000"
    }
})

inputMonth.addEventListener("input", () =>{
    Cardate.innerText = inputMonth.value;

    if(inputMonth.value.length === 0){
        Cardate.innerText = "00"
    }
})

inputYear.addEventListener("input", () =>{
    Caryear.innerText = inputYear.value;

    if(inputYear.value.length === 0){
        Caryear.innerText = "00"
    }
})

inputCVC.addEventListener("input", () =>{
    Carcvc.innerText = inputCVC.value;

    if(inputCVC.value.length === 0){
        Carcvc.innerText = "000"
    }
})

var cleave = new Cleave('#inp-number', {
    creditCard: true,
});

Form.addEventListener("submit", (e) =>{
    e.preventDefault();
    Form.classList.add("disabled");
    Graciass.classList.remove("disabled");
})

BotonCont.addEventListener("click", () =>{
    Form.classList.remove("disabled");
    Graciass.classList.add("disabled");
    Form.reset();
    cardName.innerText = "Martin Sebastian Segovia"
    CardNumber.innerText = "0000 0000 0000 0000"
    Cardate.innerText = "00"
    Caryear.innerText = "00"
    Carcvc.innerText = "000"
})