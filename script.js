let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");

let numInput = document.querySelector("#numberInput");

numInput.addEventListener("input", getFactFetch);

function getFactFetch() {
  let number = numInput.value;

  fetch("http://numbersapi.com/" + number)
    .then((response) => response.text())
    .then((data) => {
      if (number != "") {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch((error) => console.log(error));
}
