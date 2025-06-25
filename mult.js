//izgenerisati 2 random broja, izmedju 1 i 10
//dugmne za submit da je disejblano ukoliko korisnik nije ukucao nista
//na submit proveriti je li to sto je ukucao korisnik, jednako proizvodu 2 random broja,
//ukoliko jeste, povecati skor
//ukoliko nije, smanjiti skor
//u svakom slucaju, ponovo izgenerisati dva random broja

console.log("------------------");
let number1 = Math.floor(Math.random() * 10) + 1;
let number2 = Math.floor(Math.random() * 10) + 1;

let score = 0;

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const buttonEl = document.querySelector("button");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

questionEl.textContent = `What is ${number1} multiplied by ${number2}?`;
scoreEl.textContent = `Score: ${score}`;

inputEl.addEventListener("input", () => {
  buttonEl.disabled = inputEl.value.trim() === "";
});

formEl.addEventListener("submit", function (e) {
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
});

function generisiNovaPitanja() {
  number1 = Math.floor(Math.random() * 10) + 1;
  number2 = Math.floor(Math.random() * 10) + 1;
  questionEl.textContent = `What is ${number1} multiplied by ${number2}?`;
}

window.addEventListener("DOMContentLoaded", () => {});
