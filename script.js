// ----- data -----

const trades = [
  { ticket: 2201, customer: "Polly Gon",  title: "Hollow Knight",       platform: "Switch", offer: 24.00, accepted: true,  tags: ["complete", "case cracked"] },
  { ticket: 2202, customer: "Terry Bull", title: "Madden 19",           platform: "PS4",    offer: 0.75,  accepted: false, tags: ["disc only", "scratched"] },
  { ticket: 2203, customer: "Rhea Fund",  title: "Elden Ring",          platform: "PS5",    offer: 18.50, accepted: true,  tags: ["complete"] },
  { ticket: 2204, customer: "Ray Tracer", title: "Mario Kart 8 Deluxe", platform: "Switch", offer: 31.00, accepted: true,  tags: ["complete", "sealed"] },
  { ticket: 2205, customer: "Sal Vage",   title: "Madden 19",           platform: "Xbox",   offer: 0.75,  accepted: false, tags: ["disc only"] },
  { ticket: 2206, customer: "Cam Payne",  title: "Skyrim",              platform: "Xbox",   offer: 6.00,  accepted: true,  tags: ["complete", "no manual"] },
  { ticket: 2207, customer: "Mark Down",  title: "Madden 19",           platform: "PS4",    offer: 0.75,  accepted: false, tags: ["disc only", "no case"] }
];


// ----- elements -----

const tradeList = document.getElementById("trade-list");
const payout = document.getElementById("payout");
const lookup = document.getElementById("lookup");
const lookupButton = document.getElementById("lookup-button");
const lookupResult = document.getElementById("lookup-result");
const offerBox = document.getElementById("offer");
const offerButton = document.getElementById("offer-button");
const offerResult = document.getElementById("offer-result");


// ----- functions -----



// ----- listeners -----



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


   trades.forEach(function (trade){
     const row = document.createElement("li");
     row.textContent = `${trade.ticket } - ${trade.customer} - $${trade.offer.toFixed(2)}`;

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
