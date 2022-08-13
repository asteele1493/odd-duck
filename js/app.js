'use strict';

//Constructor function for product images//////////////

function Product(name, path){
  this.name = name;
  this.clicked = 0;
  this.path = path;
}

//Array containing all products utilizing constructor function to create them///
let allProducts = [
  new Product('bag','img/bag.jpg'),
  new Product('banana', 'img/banana.jpg'),
  new Product('bathroom', 'img/bathroom.jpg'),
  new Product('boots', 'img/boots.jpg'),
  new Product('breakfast', 'img/breakfast.jpg'),
  new Product('bubblegum', 'img/bubblegum.jpg'),
  new Product('chair', 'img/chair.jpg'),
  new Product('cthulhu', 'img/cthulhu.jpg'),
  new Product('dog-duck', 'img/dog-duck.jpg'),
  new Product('dragon', 'img/dragon.jpg'),
  new Product('pen', 'img/pen.jpg'),
  new Product('pet-sweep', 'pet-sweep.jpg'),
  new Product('scissors', 'img/scissors.jpg'),
  new Product('shark', 'img/shark.jpg'),
  new Product('sweep', 'img/sweep.jpg'),
  new Product('tauntaun', 'img/tauntaun.jpg'),
  new Product('unicorn', 'img/unicorn.jpg'),
  new Product('water-can', 'img/water-can.jpg'),
  new Product('wine-glass', 'img/wine-glass.jpg'),
];

//Setting global variable for number of rounds counter
//let currentRound = 0;

/////////////////////////////////////////////////////////////////////////
//Random number generator that returns array of random numbers within the index requested.

function randomImage(){
  return Math.floor(Math.random() * allProducts.length);
}

//using random image function to return three random images
function multipleRandomImages(){
  let imageA = randomImage();
  let imageB = randomImage();
  let imageC = randomImage();

  while (imageA === imageB){
    imageB = randomImage();
  }
  while (imageB === imageC){
    imageC = randomImage();
  }
  return [imageA, imageB, imageC];
}

multipleRandomImages();


// // DOM Manipulation
// let products = allProducts[multipleRandomImages()];
// let imageA = document.getElementById("first");
//   img.src = `img/${product.name}.jpg`;
// let imageB = document.getElementById("second");
//   img.src = `img/${product.name}.jpg`;
// let imageC = document.getElementById("third");
//   img.src = `img/${product.name}.jpg`;

// //Event Listener steps///////////////////////////
// let buttonA = document.getElementById("imageButton1");
// button.addEventListener('click', showNewImages);

// let buttonB = document.getElementById("imageButton2");
// button.addEventListener('click', showNewImages);

// let buttonC = document.getElementById("imageButton3");
// button.addEventListener('click', showNewImages);


// //This handler gets invoked when we click on the button
// function showNewImages() {
//   // Get a random product
//   let products = allProducts[randomImage()];
//   // Select the img
//   let imgA = document.getElementById("first");
//   let imgB = document.getElementById("second");
//   let imgC = document.getElementById("third");
//   // Make the img the product
//   img.src = `img/${product.name}.jpg`;
//   img.alt = product.name;
//   img.title = product.name;
//   // Increments shown product's .clicked property
//   product.clicked++;
//   console.log(product);
//   currentRound++;
//   // Logic for when voting rounds have completed:
//   if (currentRound === 10) {
//   // Remove my event listener
//     button.removeEventListener('click', showNewImage);
//   }
// }
