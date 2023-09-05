// Write your code here!

// remove the <main> with id `main`
const main = document.getElementById("main");
main.remove();

// alternative
// document.querySelector("main").remove();

// 'newHeader' variable that points to <h1> node
const newHeader = document.createElement("h1");

// 'newHeader' has id of 'victory'
newHeader.id = 'victory';

// alternative
// newHeader.setAttribute('id', 'victory');

// text your-name is the champion
newHeader.textContent = "Ling is the champion";

// alternative, but not advised
//newHeader.innerHTML = "Ling is the champion";

// add changes
document.body.append(newHeader);