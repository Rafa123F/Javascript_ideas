

const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
    return name.toUpperCase();
  });

  const upperizedNames1 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
  );

console.log(upperizedNames);
console.log(upperizedNames1);


  //////


  const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(function(name) {
  return name.length > 6;
});

const longNames1 = names.filter(
    name => name.length > 6
  );

console.log(longNames);
console.log(longNames1);

//////
//////////////


const greet = name => `Hello ${name}!`;
greet('Asser');

/////

// single parameter works without parentheses
const greetWithout = name => `Hello ${name}!`;
greetWithout('Nadia');

// single parameter works with parentheses
const greetWith = (name) => `Hello ${name}!`;
greetWith('Sam');

////

// empty parameter list requires parentheses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();

// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => 
    console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);

orderIceCream('chocolate', 'waffle');

////

const vowels='aeiou'.split('');
const bigVowels = vowels.map((letter) => letter.toUpperCase());

//bigVowels();
console.log(bigVowels);


const vowels1='aeiou'.split('');
const bigVowels1 = vowels1.map( letter => letter.toUpperCase());

//bigVowels1(vowels1);
console.log(bigVowels1);

///////////////////////
/////

const upperizedNames2 = ['Farrin', 'Kagure', 'Asser'].map( name => {
    name = name.toUpperCase();
    return `${name} has ${name.length} characters in their name`;
  });
console.log(upperizedNames2);
  /////////////////
////////////////////////////////

  const colors=['red','blue','green','yellow'];

const crazyColors= colors.map( color => {
const jumble= color.split('').reverse();
return jumble.join('') + '!';
});

const crazyColors1= colors.map( color => {
color.split('').reverse().join('') + '!';
});

//const crazyColors2= colors.map( color => return color.split('').reverse().join('') + '!');
const crazyColors3= colors.map( color => color.split('').reverse().join('') + '!');

console.log(crazyColors);
//crazyColors();
console.log(crazyColors1);
//crazyColors1();
console.log(crazyColors3);
//crazyColors3();