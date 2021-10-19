// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

function pizzaOven(crustType, sauceType, cheeses, toppings) {
  return {
    crustType,
    sauceType,
    cheeses,
    toppings,
  };
}

var pepperoniPizza = pizzaOven(
  "deep dish",
  "traditional",
  ["mozarella"],
  ["pepperoni"]
);
console.log(pepperoniPizza);

var other = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(other);

var hawaiian = pizzaOven(
  "hand tossed",
  "bbq",
  ["mozzarella"],
  ["pineapple", "ham", "cherries"]
);
console.log(hawaiian);

var supreme = pizzaOven(
  "hand tossed",
  "traditional",
  ["mozzarella", "monterrey"],
  ["bacon", "pepperoni", "green peppers", "suasage", "onion", "olives"]
);
console.log(supreme);

function randomPizza() {
  var crustTypes = ["hand tossed", "deep dish", "cheesy edges"];
  var sauceTypes = ["marinara", "bbq", "other"];
  var cheeses = ["mozarella", "monterrey", "feta", "cheddar"];
  var allToppings = [
    "mushrooms",
    "onion",
    "sausage",
    "bacon",
    "ham",
    "pinapple",
  ];

  var crustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
  var sauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
  var cheese = cheeses[Math.floor(Math.random() * cheeses.length)];
  var toppings = allToppings[Math.floor(Math.random() * allToppings.length)];

  return { crustType, sauceType, cheeses: [cheese], toppings: [toppings] };
}

var pizza1 = randomPizza();
console.log(pizza1);
var pizza2 = randomPizza();
console.log(pizza2);
var pizza3 = randomPizza();
console.log(pizza3);
