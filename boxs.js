console.log("hello");

const myApp = document.querySelector('#app');
console.log(myApp);

const myCards = [
    {
        name: 'card1',
        description: 'This is card 1',
        Image: 'https://via.placeholder.com/150'
    },
    {
        name: 'card2',
        description: 'This is card 2',
        Image: 'https://via.placeholder.com/150'
    },
    {
        name: 'card3',
        description: 'This is card 3',
        Image: 'https://via.placeholder.com/150' 
    }
];

function creatCards(card) {

    const myDiv = document.createElement('div');
    myDiv.classList.add("card");
    myDiv.innerHTML=`
    <h2>${card.name}</h2>
    <img src="${card.Image}" alt="${card.Image}" >
    <p> ${card.description}</p>
    `
    myApp.appendChild(myDiv);
}

///////////////////

myCards.forEach(creatCards);
const listOfElements = document.querySelectorAll('h2');

const mainHeading = document.querySelector('h2');

for (let i = 0; i < listOfElements.length; i++){
    console.log('i is ' + i );
    console.log(listOfElements[i]);
  }


  ///// events on click 

  mainHeading.addEventListener('click', function () {
    console.log('The heading was clicked!');
  });

  const element = listOfElements[2];


  // select the h1 element
const header = document.querySelector("p");

// store the original text in a variable
const originalText = header.textContent;

// store the updated text in a variable
const updatedText = "Build an AR app";

// add a listener for the mouse moving over the header element
header.addEventListener("mouseover", function () {
  header.textContent = updatedText;
});

// add a listener for the mouse moving out of the header element
header.addEventListener("mouseout", function () {
  header.textContent = originalText;
});

////////
/////

// select hero_module element
const hero = document.querySelector('.hero__module');

// I created function that runs a event listener to remove the last child element in the hero module:
function removeElementOnce() {
  hero.lastElementChild.remove();
}
//I registered the event listener on the document:
document.addEventListener('click', removeElementOnce);
//I tested my code. It works!!! But I'm not done yet because the listener is still active after the first click.

//I added removeEventListener my event listener function to remove the listener after it has been triggered the first time:

function removeElementOnce() {
  hero.lastElementChild.remove();
  document.removeEventListener('click', removeElementOnce);
}