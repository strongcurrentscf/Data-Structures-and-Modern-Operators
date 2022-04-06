'use strict';
///*
// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  /////// ENHANCED OBJECT LITERALS ///////
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngrdient, ...otherIngredients) {
    console.log(mainIngrdient);
    console.log(otherIngredients);
  },
};
//*/

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
///*
console.log('---- CODING CHALLENGE 4 ----');
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
//*/

// const [...word] = [...rows];
// console.log(word);

/*
/////// WORKING WITH STRINGS - PART 3 ///////

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    console.log(n);
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding a String
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; //One of the operants as a string will convert all operants to strings
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(267377891826355));
console.log(maskCreditCard(438743597453485));
console.log(maskCreditCard('47856237434802348765230'));

//Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/*
/////// WORKING WITH STRINGS - PART 2 ///////
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixCapitalization = function (nameString) {
  const nsLower = nameString.toLowerCase();
  const nsCorrect = nsLower[0].toUpperCase() + nsLower.slice(1);
  console.log(nsCorrect);
};
fixCapitalization('cHrIsTian');

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n'; // '\n' is ENTER

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,98&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// old way to replace all
console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family!');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
/////// WORKING WITH STRINGS - PART 1 ///////
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); // Case Sensitive

console.log(airline.slice(4)); // Slice Method with 'BEGIN' parameter (4). Returns a new sub-string (Air Portugal). Does not affect the original string primitive.
console.log(airline.slice(4, 7)); // Slice Method with 'END' parameter (7). Returns a new sub-string (Air). Does not include the ending value, (7) (' '), in the returning string. Length of returning string is (4, 7) => END(7) - BEGIN(4) = (3)

// Extracting word with occurence of space(' ')
console.log(airline.slice(0, airline.indexOf(' ')));
// Extracting last word with last occurence of space(' '). Add 1 to exclude space(' ')
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Extracting from end of the string
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log('You got the middle seat 😬 ')
    : console.log('You got lucky 😎 ');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
*/

/*
/////// MAPS: ITERATION ///////
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javacript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map.
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt(`${question.get('question')}`));
const answer = 3;
console.log(answer);

// Taking advantage of having Bullion values and keys.
console.log(question.get(question.get('correct') === answer));

//Longer way
question.get('correct') === answer
  ? console.log(`${question.get(true)}, ${question.get(answer)} is right!`)
  : console.log(`${question.get(false)} ${question.get(answer)} is wrong.`);

// Convert map to array
console.log(...question);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
/////// MAPS: FUNDAMENTALS ///////
// Maps are data structures used to map values to keys. Key/Value pairs.
// Keys can be any type. (objects, arrays, maps).
//Best to create empty maps and then fill it in with set method (variable.set(key, value)).
// Maps are Iterable.
const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// Set method returns an updated map. Allows for chaining the set method.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true)); // Datatype of key matters!
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // Bullion as map key

console.log(rest.has('categories'));
rest.delete(2); // Delete by key name
console.log(rest.size);
// rest.clear();

// Array as the map key through same object in memory (const arr = [1, 2]).
const arr = [1, 2];
rest.set(arr, 'Test');

// DOM elements are special type of object.
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
/////// SETS ///////
// Collection of unique values. NO DUPLICATES
// We write 'new Set' and pass an Iterable (strings, arrays)
// A set is an Iterable
// ALL UNIQUE. NO ORDER. NO INDEXES
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); // has method
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)]; // Set to Array
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // Number of unique values (size)

console.log(new Set('jonasschmedtmann').size);
*/

/*
//////// LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES ///////

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire OBJECT
const entries = Object.entries(openingHours);
//console.log(entries);

// [KEY, VALUE]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*
/////// FOR/OF LOOP ///////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// Working with Index values (old way)
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// Working with Index values (new ES6 destructuring way)
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);
*/

/*
/////// NULLISH COALESCING OPERATOR (??) ///////

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: Null and Undefined (NOT '' or 0)
//Nullish Coelescing works with nullish values instead of falsey. Short-Circuits on NON-nullish evaluation
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
/////// SHORT-CIRCUITING && and || ///////

console.log('---- OR ----');
// Use ANY data type, Return ANY dat type, short-circuiting.
// OR op returns the first TRUTHY value of all the operants or the LAST value if all of them are falsey.
console.log(3 || 'Jonas'); // first value is a truthy value
console.log('' || 'Jonas'); // second value is a truthy value
console.log(true || 0); // first value is a truthy value
console.log(undefined || null); // second value is also a falsey value but is the value returned.

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello is the first truthy value in the chain and short-circuits the evaluation and is the return value.

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
// AND op returns the first FALSEY value of all the operants or the LAST value if all of them are truthy.
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('msuhrooms', 'sipnach');
*/

/*
/////// THE SPREAD OPERATOR ///////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables are Arrays, Strings , Maps, and Sets... NOT OBJECTS
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedmann`); //Doesnt work.
// Works when passing arguments into functions or new array. Used whereever you can pass multiple values separated by a comma.

// Real-World Example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
/////// REST PATTERNS AND PARAMETERS ///////

// 1) DESTRUCTURING

// This is Spread Op because ... is on RIGHT side of Assignment op =
const arrr = [1, 2, ...[3, 4]];

// This is Rest Op because ... is on LEFT side of Assignment op =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');
*/

/*
/////////////////////////////////////////////////////

/////// DESTRUCTURING ARRAYS ///////
// We use Destructuring to unpack values from an array or object and put them into seperate variables
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Built in data structures and Modern advanced operators
// Array destructuring.
// A way of unpacking values from arrays into variables.

const arr = [2, 3, 4]; // Old way to retrieve elements to variables
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // Destructuring Assignment on the right side of assignment operator. Destructuring all 3 variables at the same time by declaring with const square brackets.
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories; // Destructuring [] from 'categories' from restaurant Array and leaving hole in variables declaration to skip element in array.
console.log(main, secondary);

// const temp = main; // Old way to switch around main and secondary variables
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; // Destructuring for inversion: first create a new array with the 2 variables inverted. And then destruct. Now [main, secondary] equal the destructuring of the [secondary, main] array.
// Didnt use let or const because we are simply reassigning the variables already declared.
console.log(main, secondary);

// Can help with Functions that return an array and then destruct that array into variables.

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// NESTED Destructuring
// Basically destructuring inside of destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/

/*
/////// OBJECT DESTRUCTURING ///////

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let aa = 111;
let bb = 999;
const obj = { aa: 23, bb: 7, cc: 14 };
({ aa, bb } = obj);
console.log(aa, bb);

// Nested Object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
//////////////////////////////////////////////////
/*
/////// CODING CHALLENGE DATA ///////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('---- CODING CHALLENGE 1 ----');

// ONE PLAYER ARRAY FOR EACH TEAM
const [players1, players2] = game.players;
console.log(players1, players2);

//The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//During the game, Bayern Munich (team1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...playerName) {
  console.log(...playerName, `-`, `${playerName.length} goals were scored.`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//The team with the lower odd is more likely to win.Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');
team1 == team2 && console.log('Draw is most likely.');
*/

/*
console.log('---- CODING CHALLENGE 2 ----');

//1 LOOP OVER THE game.scored ARRAY AND PRINT EACH PLAYER NAME TO THE CONSOLE, ALONG WITH THE GOAL NUMBER (EXAMPLE: "Goal 1: Lewandowski")

//2 USE A LOOP TO CALCULATE THE AVERAGE odd AND LOG IT TO THE CONSOLE

//3 PRINT THE 3 odds TO THE CONSOLE:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
GET THE TEAM NAMES DIRECTLY FROM THE game OBJECT, DON'T HARDCODE THEM (except for "draw"). HINT: NOTE HOW THE ODDS AND THE GAME OBJECTS HAVE THE SAME PROPERTY NAMES

//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2
// Looping through game.odds OBJECT with (for/of)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/*
console.log('---- CODING CHALLENGE 3 ----');

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// #1
const events = [...new Set(gameEvents.values())];
console.log(events);

// #2
gameEvents.delete(64);
//console.log(gameEvents);

// #3
let gameDuration = [...gameEvents.keys()];
gameDuration = gameDuration[gameDuration.length - 1];
//console.log(gameDuration);

console.log(
  `"An event happened, on average, every ${
    gameDuration / gameEvents.size
  } minutes"`
);

// #4
for (const [time, event] of gameEvents) {
  //console.log(time, event);
  time <= 45
    ? console.log(`[FIRST HALF] ${time}: ${event}`)
    : console.log(`[SECOND HALF] ${time}: ${event}`);
}
console.log(`---- #4 Refactored ----`);
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
