const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

const gemstone1 = {
    type1: 'quartz',
    collor: 'rose',
    carat1: 21.29
};




//   const {type, color, carat} = gemstone;
let { collor } = gemstone1

const things = [
    'red',
    'basketball',
    'paperclip',
    'green',
    'computer',
    'earth',
    'udacity',
    'blue',
    'dogs',
];

const [color1, , , color2, , , , color3] = things

console.log(color1, color2, color3);
//////

const favoriteFoods = {
    first: 'pizza',
    second: 'ice cream',
    third: 'tacos',
    fourth: 'sushi',
};

//const foodArray = [];
const { first, second, third, fourth } = favoriteFoods;
const foodArray = [first, second, third, fourth];

console.log(first, second, third, fourth);

/////////

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = { type, color, carat };

console.log(gemstone);
// the output// {type: 'quartz', color: 'rose', carat: 21.29}

////

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

for (const day of days) {

    let firstL = day.slice(0, 1);
    console.log(day);
}
/////////////


////// Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.
// If you have met the requirements for this exercise, you should get this message in the console when you run 
//Your code passes!

//If your code doesn't pass all of the tests, you'll get this message
//Your code fails. Try again!

function average(...nums) {
     let sum = 0;
     for(const num of nums) {
       sum+=num;
     }
     if (nums.length > 0) return sum/nums.length;
     else return sum;
   }

   testSets = [
    [[2, 6], 4],
    [[2, 3, 3, 5, 7, 10], 5],
    [[7, 1432, 12, 13, 100], 312.8],
    [[], 0],
];

function codeTest(testSets) {
    for (test of testSets) {
        if (average(...test[0]) !== test[1]) {
            return 'Your code fails. Try again!';
        }
    }
    return 'Your code passes!';
}

console.log(codeTest(testSets));


