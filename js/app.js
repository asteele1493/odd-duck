'use strict';

//Global variables
let maxRound = 25;

// empty array to push generated images into.
let generatedImg = [];

// array for local storage///////////////
//let storageProduct = allProducts[];

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

let currentRound = 0;

/////////////////////////////////////////////////////////////////////////
//Random number generator that returns array of random numbers within the index requested.

function randomImage(){
  return Math.floor(Math.random() * allProducts.length);
}

//using random image function to return three random images

function generatedImgs(){
  //Clear out the generatedImg array.
  if (generatedImg.length > 0){
    generatedImg.shift();
  }
  while (generatedImg.length < 6){
    let randomIndex = randomImage();
    if(!generatedImg.includes(allProducts[randomIndex])){
      generatedImg.push(allProducts[randomIndex]);
    }
    if (currentRound === maxRound){
      alert('You\'ve run out of selections. Click view results!' );
    }
  }
  //not sure if this would work, but I'm thinking this would generate six random images and remove three that are unique from the previous set? I used pop previously.
  generatedImg.shift();
  generatedImg.shift();
  generatedImg.shift();
  return generatedImg;
}

//Save settings to local storage////////////////
function setProducts(){
  let stringify = JSON.stringify(allProducts);
  localStorage.setIem(allProducts, stringify);
}

//Function to get items from local storage////////
function getProducts(){
  let getProducts = localStorage.getItem(allProducts);
  let parsedAllProducts = JSON.parse(getProducts);
  return parsedAllProducts;
}


///Function to load settings on pageLoad//////////
function pageLoad(){
  let savedSettings = localStorage.getItem("allProducts");
  if(!savedSettings){
    return;
  }
}


//Event Listener steps///////////////////////////
// add event listener method takes in two arguments. the event, and the event handler. pass in reference to the event handler.
let imageButton1 = document.getElementById('imageButton1');
imageButton1.addEventListener('onClick', renderImages);

let imageButton2 = document.getElementById('imageButton2');
imageButton2.addEventListener('onClick', renderImages);

let imageButton3 = document.getElementById('imageButton3');
imageButton3.addEventListener('onClick', renderImages);


//console.log(renderImages);

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
    imageButton1.removeEventListener('onClick', renderImages);
    imageButton2.removeEventListener('onClick', renderImages);
    imageButton3.removeEventListener('onClick', renderImages);
  } else{
    //renderImages();
    generatedImgs();
  }
}

setProducts();

// Remove event listeners on the product after voting rounds have been completed
// Add view results button that, when clicked, displays the list of all products followed by the votes received, and number of
// times seen for each. Ex. banana had 3 clicks, and was seen 5 times.
// Use this.name to display results.

//Displaying results

let resultButton = document.getElementById('resultButton');
resultButton.addEventListener('onClick', allResults);


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
getProducts();

// Render chart////////////////////////
function renderChart() {
  let productNames = [];
  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
  }

  let clicks = [];
  for (let i = 0; i < allProducts.length; i++) {
    clicks.push(allProducts[i].clicked);
  }
  /* refer to Chart.js > Chart Types > Bar Chart:
  https://www.chartjs.org/docs/latest/charts/bar.html
  and refer to Chart.js > Getting Started > Getting Started:
  https://www.chartjs.org/docs/latest/getting-started/ */

  const ctx = document.getElementById("chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: productNames,
      datasets: [
        {
          label: "Clicks",
          data: clicks,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Shown",
          data: clicks,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        }
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

renderChart();
pageLoad();
