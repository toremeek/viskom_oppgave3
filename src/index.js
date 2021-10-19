import "./styles.css";

/*funksjon som teller opp fra count med 20ms mellomrom */
const number = document.getElementById("number");
const numberMenn = document.getElementById("numberMenn");
const barMenn = document.getElementById("mb2");
const barKvinner = document.getElementById("kb2");
const kvinner = document.getElementById("kvinner");
const menn = document.getElementById("menn");
const tittel = document.getElementById("barTittel");
const knapp = document.getElementById("knapp");

let kvinnerCount = 50;
let kvinnerBarSize = 50;
function resizeNumber() {
  setTimeout(function () {
    number.innerHTML = kvinnerCount.toFixed(2) + "%";
    kvinnerCount = kvinnerCount - 0.02;
    if (kvinnerCount > 27.58) {
      resizeNumber();
    }
  }, 10);
}
let mennCount = 50;
let mennBarSize = 50.1;
let kvinnerSize = 50;
let mennSize = 50;

function resizeMenn() {
  setTimeout(function () {
    numberMenn.innerHTML = mennCount.toFixed(2) + "%";
    barMenn.style.width = mennBarSize + "%";
    barKvinner.style.width = kvinnerBarSize + "%";
    kvinner.style.width = kvinnerSize + "%";
    menn.style.width = mennSize + "%";
    kvinnerBarSize -= 0.017;
    mennBarSize += 0.017;
    mennCount = mennCount + 0.02;
    if (mennCount < 72.42) {
      resizeMenn();
    }
    if (mennCount > 51) {
      tittel.innerHTML =
        "Om litt over et år skal 40 % av alle ledere i norsk idrett være kvinner";
    }
    if (mennCount > 63) {
      tittel.innerHTML =
        "Disse tallene viser kjønnsbalansen blant styrelederne i idretten i dag";
    }
    if (mennCount > 71) {
      tittel.innerHTML = "Over 72 % er menn";
    }
    if (mennCount > 72.2) {
      knapp.style.display = "block";
      knapp.style.animationName = "fadein";
      knapp.style.animationDuration = "2s";
    }
  }, 12);
}

resizeNumber();
resizeMenn();
knapp.addEventListener("click", function () {
  window.scroll({
    top: 1600,
    left: 0,
    behavior: "smooth"
  });
});
