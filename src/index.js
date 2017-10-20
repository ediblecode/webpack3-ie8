// Here be some random ES6 code, some taken from https://github.com/lukehoban/es6features

if (typeof console === "undefined") {
  console = { log: () => {} };
}

var evens: Array = [2, 4, 6, 8];

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

var fives: Array<number> = [];

// Statement bodies
nums.forEach((v: number) => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
        console.log(this._name + " knows " + f));
  }
};

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

var sqrs = square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 16, 56.25, 64, 132.25, 441]

console.log(sqrs);

var foo = {};
var a = foo.catch;

document.getElementById("heading1").innerText = `hello ${ " test" }`;

export default square;