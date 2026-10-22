# Method Notes

## String methods
- A method is a function that belongs to a value. () = you call it.
- "   cam  payne  " .trim() -> "cam payne". Takes whitespace off both ends.
- They hand back a new string. The original is unchanged.


## .includes()
- "Mario Kart" .includes("Kart) -> true
- "Mario Kart" .includes("kart) -> false. Case sensitive.


## .split()
-"complete, sealed".split(", ") -> ["complete", "sealed"] 
- Cuts wherever it finds the thing I gave it. Thing is thrown away.
- Hands back an array.


## input.value is always a string
- typeof offerBox.value -> 'string'
- + is the dangerous math symbol because it has two jobs.



## Number() and parseFloat()
- Number("25") -> 25. Wraps a string, hands back a number.
- Number("25 bucks") NaN. All or nothing.
- parseFloat("25 bucks") -> 25. Reads from the front, stops at the junk.
- USe Number() unless expecting units.


## The empty box
- Number("") is 0. Not NaN.
- An empty form field has the value of "".


## NaN
- Number("abc") -> NaN.
- NaN === NaN is fals. It's the only value not equal to itself.
- typeof NaN is 'number'.
- Use Number.isNaN(value) to check for it.


## .toFixed()
- (24).toFixed(2) -> "24.00". Two decimal places, rounds if needed.
- It hands back a string, not a number.
- (24).toFixed(2) + 1 -> "24.001"
- Do the math first and .toFixed last.


## .forEach()
- trades.forEach(function (trade){.......})


## .map()
- Builds a new array from the old one.
- trades.map(function (trade) { return trade.ticket })
- The return is the point. forEach ignores it, map collects it.



## .filter() and .find()
- filter -> a new array of all the ones where we returned true.