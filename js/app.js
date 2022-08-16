'use strict';

//Global variables
let currentRound = 0;
let maxRound = 25;
let generatedImg = [];

//Constructor function for product images//////////////

function Product(name, path){
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.shown = 0;
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


/////////////////////////////////////////////////////////////////////////
//Random number generator that returns array of random numbers within the index requested.

function randomImage(){
  return Math.floor(Math.random() * allProducts.length);
}

//using random image function to return three random images
function generatedImgs(){
  while (generatedImg.length < 3){
    let randomIndex = randomImage();
    while(!generatedImg.includes(allProducts[randomIndex])){
      generatedImg.push(allProducts[randomIndex]);
      currentRound++;
    }
    if (currentRound === maxRound){
      break;
    }
  }
}

// DOM Manipulation to display randomly generated images

document.getElementById('firstImage') === generatedImg[0];
document.getElementById('secondImage') === generatedImg[1];
document.getElementById('thirdImage') === generatedImg[2];



//Event Listener steps///////////////////////////
let firstButton = document.getElementById('imageButton1');
firstButton.addEventListener('click', generatedImgs()[0]);

let secondButton = document.getElementById('imageButton2');
secondButton.addEventListener('click', generatedImgs()[1]);

let thirdButton = document.getElementById('imageButton3');
thirdButton.addEventListener('click', generatedImgs()[2]);


console.log(generatedImg);
generatedImgs();
