// ----- data -----

const trades = [];
let nextTicket = 2301;

// ----- elements -----

const tradeList = document.getElementById("trade-list");
const payout = document.getElementById("payout");
const lookup = document.getElementById("lookup");
const lookupButton = document.getElementById("lookup-button");
const lookupResult = document.getElementById("lookup-result");
const offerBox = document.getElementById("offer");
const offerButton = document.getElementById("offer-button");
const offerResult = document.getElementById("offer-result");

const tradeForm = document.getElementById("trade-form");
const customerBox = document.getElementById("customer");
const titleBox = document.getElementById("title");
const takeButton = document.getElementById("take-button");


// ----- functions -----

// for(let i = 0; i < trades.length; i++) {
//      const row = document.createElement("li");
//      row.textContent = `${trades[i].ticket } - ${trades[i].customer} - $${trades[i].offer.toFixed(2)}`;

//      if (trades[i].accepted === false) {
//       row.classList.add("rejected");
//      }

//      tradeList.appendChild(row);
// }

// ^^^^^^^^^^^^^^^Same effect^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 
function drawTrades() {
tradeList.replaceChildren();

  if (trades.length === 0) {

    payout.textContent = "Paid out today: $0.00";


    const empty = document.createElement("li");
    empty.textContent = "No trades yet today.";
    empty.classList.add("empty");
    tradeList.appendChild(empty);
    return;
  }

  let total = 0;


  trades.forEach(function (trade) {
    const row = document.createElement("li");
    row.textContent = `${trade.ticket} - ${trade.customer} - $${trade.offer.toFixed(2)}`;

    if (trade.accepted === false) {
      row.classList.add("rejected");
    }
    else {
      total += trade.offer;
    }

    tradeList.appendChild(row);
  });
 
  payout.textContent = `Paid out today: $${total.toFixed(2)}`;
}


// ----- listeners -----

tradeForm.addEventListener("submit", function (event){
  event.preventDefault();

  if(customerBox.value === "" || titleBox.value === "" || offerBox.value === "") {
    return;
  }
  
    trades.push({
      ticket: nextTicket,
      customer: customerBox.value.trim(),
      title: titleBox.value.trim(),
      offer: Number(offerBox.value),
      accepted: true
    });

    nextTicket++;

    customerBox.value = "";
    titleBox.value = "";
    offerBox.value = "";

  drawTrades();
});

// ----- run at load -----

// for(let i = 0; i < trades.length; i++) {
//      const row = document.createElement("li");
//      row.textContent = `${trades[i].ticket } - ${trades[i].customer} - $${trades[i].offer.toFixed(2)}`;

//      if (trades[i].accepted === false) {
//       row.classList.add("rejected");
//      }

//      tradeList.appendChild(row);
// }

// ^^^^^^^^^^^^^^^Same effect^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


trades.forEach(function (trade) {
  const row = document.createElement("li");
  row.textContent = `${trade.ticket} - ${trade.customer} - $${trade.offer.toFixed(2)}`;

  if (trade.accepted === false) {
    row.classList.add("rejected");
  }

  tradeList.appendChild(row);
});


const rejected = trades.filter(function (trade) {
  return trade.accepted === false;
})


console.log(rejected);


const ticket = trades.find(function (trade) {
  return trade.ticket === 2204;
});

console.log(ticket)
