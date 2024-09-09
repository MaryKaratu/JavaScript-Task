const massMark = 78;
const heightMark = 1.69;
console.log(massMark, heightMark);

const massJohn = 92;
const heightJohn = 1.95;
console.log(massJohn, heightJohn);

// const massMark = 95;
// const heightMark = 1.88;
// console.log(massMark, heightMark);

// const massJohn = 85;
// const heightJohn = 1.76;
// console.log(massJohn, heightJohn);

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's  is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
//}

if (BMIMark > BMIJohn) {
  console.log(` Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
