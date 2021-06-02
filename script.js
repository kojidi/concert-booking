const programSelector = document.querySelector("#booking__selecting--programs");
const seats = document.querySelector(".booking__seats");
const count = document.getElementById("count");
const total = document.getElementById("total");

function showFinalResult() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = +selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  //   console.log(selectedSeatsCount);
}

let ticketPrice = +programSelector.value;
// console.log(ticketPrice);

programSelector.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  console.log(ticketPrice);
  showFinalResult();
});

seats.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    showFinalResult();
    // console.log("Hello");
  }
});
