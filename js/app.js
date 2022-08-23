'use strict';

//Global variables
let currentRound = 0;
let maxRound = 25;

// empty array to push generated images into.
let generatedImg = [];

// array for local storage///////////////
let storageProduct = allProducts[];

//Constructor function for product images//////////////

function Product (name, path){
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
  //Clear out the generatedImg array.
  while (generatedImg.length > 0){
    generatedImg.pop();
  }
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
  return generatedImg;
}

//Save settings to local storage////////////////
function setProducts(){
  let setProducts = JSON.stringify(key, value); 
  localStorage.setItem("key", stringify);
}

//Function to get items from local storage////////
function getProducts(){
  let getProducts = localStorage.getProduct("");
  if(getProducts){
    products = JSON.parse(getProducts);
  }
}

//

//Event Listener steps///////////////////////////
// add event listener method takes in two arguments. the event, and the event handler. pass in reference to the event handler.
let imageButton1 = document.getElementById('imageButton1');
imageButton1.addEventListener('click', renderImages);

let imageButton2 = document.getElementById('imageButton2');
imageButton2.addEventListener('click', renderImages);

let imageButton3 = document.getElementById('imageButton3');
imageButton3.addEventListener('click', renderImages);


//console.log(renderImages);

//

// Event Handler; where images are going to be displayed?/////////////////////////////////
function renderImages(event){
  //generatedImgs();
  let firstImage = generatedImg[0];
  let imgA = document.getElementById('firstImage');
  imgA.src = `img/${firstImage.name}.jpg`;
  imgA.alt = firstImage.name;
  imgA.title = firstImage.name;
  firstImage.shown++;
  if (event){
    if(imgA === event.target){
      firstImage.clicked++;
    }
  }
  console.log(firstImage);

  let secondImage = generatedImg[1];
  let imgB = document.getElementById('secondImage');
  imgB.src = `img/${secondImage.name}.jpg`;
  imgB.alt = secondImage.name;
  imgB.title = secondImage.name;
  secondImage.shown++;
  if (event){
    if(imgB === event.target){
      secondImage.clicked++;
    }
  }

  let thirdImage = generatedImg[2];
  let imgC = document.getElementById('thirdImage');
  imgC.src = `img/${thirdImage.name}.jpg`;
  imgC.alt = thirdImage.name;
  imgC.title = thirdImage.name;
  thirdImage.shown++;
  if (event){
    if(imgC === event.target){
      thirdImage.clicked++;
    }
    currentRound++;
  }
  console.log(thirdImage);

  if (currentRound === maxRound){
    imageButton1.removeEventListener('click', renderImages);
    imageButton2.removeEventListener('click', renderImages);
    imageButton3.removeEventListener('click', renderImages);
  } else{
    //renderImages();
    generatedImgs();
  }
}

// Remove event listeners on the product after voting rounds have been completed
// Add view results button that, when clicked, displays the list of all products followed by the votes received, and number of
// times seen for each. Ex. banana had 3 clicks, and was seen 5 times.
// Use this.name to display results.

//Displaying results

let resultButton = document.getElementById('resultButton');
resultButton.addEventListener('click', allResults);


function allResults(){
  if (currentRound === maxRound){
    let ul = document.createElement('ul');
    allResults.appendChild('ul');

    for (let i = 0; i < allProducts.length; i++){
      let li = document.createElement('li');
      li.textContent = `${allProducts[i].name} had ${allProducts[i].clicked} clicks, and was seen ${allProducts[i].shown} times.`;
      ul.appendChild(li);
    }
  }
}


generatedImgs();

///////Generate Chart//////////////////////
function generateChart() {
  const labels = labels;

const data = {
  labels: labels,
  datasets: [
  {
    label: 'Shown',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: shown,
  },
  {label: 'Clicked',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: clicks,
  },
],

};

const config = {
type: 'bar',
data: data,
options: {
},
};
const myChart = new Chart(
  document.getElementById('chart'),
  config
);
}

generateChart();