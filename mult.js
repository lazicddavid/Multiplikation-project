//izgenerisati 2 random broja, izmedju 1 i 10
//dugmne za submit da je disejblano ukoliko korisnik nije ukucao nista
//na submit proveriti je li to sto je ukucao korisnik, jednako proizvodu 2 random broja,
//ukoliko jeste, povecati skor
//ukoliko nije, smanjiti skor
//u svakom slucaju, ponovo izgenerisati dva random broja

let number1 = Math.floor(Math.random() * 10) + 1;
let number2 = Math.floor(Math.random() * 10) + 1;

let score = 0;
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const buttonEl = document.querySelector("button");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
scoreEl.textContent = `Score: ${score}`;

const input = document.getElementById("userInput");
const button = document.getElementById("submit");


input.addEventListener('input', () => {

  if (input.value.trim() === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
questionEl.textContent = `What is ${number1} multiplied by ${number2}?`;

inputEl.oninput = function () {
  if (inputEl.value !== "") {
    buttonEl.disabled = false;
  } else {
    buttonEl.disabled = true;
    console.log("enter number");
  }
};

formEl.onsubmit = function (e) {
  e.preventDefault();

  const odgovorJe = +inputEl.value;
  const tacanOdgovor = number1 * number2;

  if (odgovorJe === tacanOdgovor) {
    score++;
  } else {
    score--;
  }

  scoreEl.textContent = `Score: ${score}`;
  inputEl.value = "";
  buttonEl.disabled = true;
  generisiNovaPitanja();
};

function generisiNovaPitanja() {
  number1 = Math.floor(Math.random() * 10) + 1;
  number2 = Math.floor(Math.random() * 10) + 1;
  questionEl.textContent = `What is ${number1} multiplied by ${number2}?`;
}
