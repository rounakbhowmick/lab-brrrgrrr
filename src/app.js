// Write your code on this file. Please don't change the existing code
// unless absolutely needed.
let selectedIngredient = [];
//Initial price of the burger
var wholeWheatBun = 10;
//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};
//console.log(Object.values(ingredients));
//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let $patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    $patty.style.display = "inherit";
  } else {
    $patty.style.display = "none";
  }
}

function renderCheese() {
  let $cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    $cheese.style.display = "inherit";
  } else {
    $cheese.style.display = "none";
  }
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
}

function renderTomatoes() {
  let $tomato = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    $tomato.style.display = "inherit";
  } else {
    $tomato.style.display = "none";
  }
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
}

function renderOnions() {
  let $onion = document.querySelector("#onion");
  //let $oniontoggle = document.querySelector(".btn-onions");
  //you can also use getElementById
  if (state.Onions) {
    //$oniontoggle.classList.add('active');
    $onion.style.display = "inherit";
  } else {
    // $oniontoggle.classList.remove('active');
    $onion.style.display = "none";
  }
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
}

function renderLettuce() {
  let $lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    $lettuce.style.display = "inherit";
  } else {
    $lettuce.style.display = "none";
  }
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty; //Toggle
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese; //Toggle
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes; //Toggle
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions; //Toggle
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce; //Toggle
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons() {

  activeall();
  document.querySelectorAll('.button').forEach((node, index) => {
    node.addEventListener('click', event => {
      event.target.classList.toggle("active");
    });
  });
}

function activeall() {
  document.querySelectorAll('.button').forEach(node => {
    node.classList.add("active");
  });
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  let ingredients = document.getElementsByClassName('items')
  //Traversing node list
  document.querySelectorAll('.button').forEach((node, index) => {
    node.addEventListener('click', event => {
      //Pushing onlyselect ingredients to new array
      selectedIngredient.push(ingredients[index].textContent);
      ingredients[index].style.display = 'block'; //Giving visibilty to the only items which is clicked
    });
  });
}
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  let sum = 0;
  let myset = [...new Set(selectedIngredient)];
  //console.log(myset);
  //Calculating sum of selected ingredients
  for (let key in ingredients) {
    if (myset.includes(key)) {
      //console.log(ingredients[key]);
      sum += ingredients[key];
    }
  }
  var list = document.getElementsByClassName("price-details")[0];
  console.log(list);
  //list.getElementsByClassName("child")[0].innerHTML = "Milk";
  list.innerHTML = "INR" + " " + sum;
}