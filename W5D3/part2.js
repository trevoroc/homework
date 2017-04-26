function titleize(array, callback) {
  let titleized = array.map((name) => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}

function printEach(array) {
  array.forEach((title) => console.log(title));
}

titleize(["Mary", "Brian", "Leo"], printEach);

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  let randomIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[randomIndex]}!`);
};

const darrell = new Elephant("Darrell", 12, ["eating", "sleeping"]);
darrell.trumpet();
darrell.grow();
console.log(darrell.height);
darrell.play();
darrell.addTrick("playing");
darrell.play();
darrell.play();
darrell.play();


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function paradeHelper(elephant) {
  console.log(`${elephant.name} struts by.`);
}

herd.forEach(paradeHelper);

function dinerBreakfast() {
  let order = ["cheesy scrambled eggs"];
  console.log(`I'd like ${order.join(' and ')} please.`);

  return function(foodItem) {
    order.push(foodItem);
    console.log(`I'd like ${order.join(' and ')} please.`);
  };
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chips");
bfastOrder("hash browns");
