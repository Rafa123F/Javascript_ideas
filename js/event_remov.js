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