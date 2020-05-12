// Write your function here:
const howOld = (age,year) => {
const theCurrentYear = 2020;
const yearDifference = year - theCurrentYear;
const newAge = age + yearDifference;
 if (newAge < 0) {
   return console.log (`The  ${year} was  ${newAge} years before you were born! `);
 } else if (newAge > age) {
   return console.log (`You will be ${newAge} in the year ${year}! `);
 } else {
return console.log(`You were ${newAge} in the year ${year} .`);
 }
};
howOld(28,2020);



// Once your function is written, write function calls to test your code!
