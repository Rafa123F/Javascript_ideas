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

