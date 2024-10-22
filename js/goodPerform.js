


const myCustomDiv = document.createElement('div');

function doParg(){
    for (let i = 1; i <= 50; i++) {
        const newElement = document.createElement('p');
        newElement.innerText = 'This is paragraph number ' + i;
      
        myCustomDiv.appendChild(newElement);
      }
      
      document.body.appendChild(myCustomDiv);

};

const t0 = performance.now();
console.log(t0);
doParg();
const t1 = performance.now();
console.log(t1);
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);



