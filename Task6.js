/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const regularFare = 800;
let age = 25;

if (age < 10) {
  console.log('Ticket Free');
}
else if (age >= 12 && age <= 28) {
  //50% discount
  const discount = 800 * 50 / 100;
  const payAmmount = regularFare - discount;
  console.log('You Get a 50% discount. Now Pay : ' + payAmmount);   // true
}
else if (age >= 60) {
  //15% discount
  const discount = 800 * 15 / 100;
  const payAmmount = regularFare - discount;
  console.log('You Get a 15% discount. Now Pay : ' + payAmmount);
}
else {
  console.log('Regular Fare : ' + regularFare);
}