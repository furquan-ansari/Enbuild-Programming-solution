// Question 1:-
/*  Render the Triangle for the given character and number of rows. That means if input character is D and number of rows are 4 then pyramid will be:
D
D E
D E F
D E F G */


let n = 4; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 68);
  }
  string += "\n";
}
console.log(string);

