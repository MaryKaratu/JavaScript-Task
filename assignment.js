// let country = "Nigeria";
// let continent = "Afican continent";
// let population = 230000000;
// console.log(country);
// console.log(continent);
// console.log(population);

// let isLand = false;
let language;
// console.log(typeof isLand);
// console.log(typeof population);
// console.log(typeof country);

language = "English";
const country = "Nigeria";
const continent = "African continent";
const isLand = false;
// isLand = true; const cannot be reassigned another value
console.log(typeof language);
console.log(country);
console.log(continent);
console.log(typeof isLand);

population = 230000000 / 2;
population++;
console.log(population);
console.log(population > 6000000);
console.log(population < 33000000);
const description =
  country +
  " " +
  "is in" +
  " " +
  continent +
  " " +
  "and its" +
  " " +
  population +
  " " +
  "people speak" +
  " " +
  language;
console.log(description);

const newDescription = `${country} is in ${continent} and it's ${population} people speak ${language}`;
console.log(newDescription);

if (population > 33000000) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33000000 - population} bellow average`
  );
}

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
