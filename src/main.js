var {
  covers,
  titles,
  descriptors
} = require('./data')

/*-------------------------------------FUNCTIONS----------------------------------*/

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

function getRandomMember(array2) {
  var index = getRandomIndex(array2)
  return array2[index]
}

function createRandomCover() {
  var randomSrc = getRandomMember(covers)
  var randomTitle = getRandomMember(titles)
  var randomDescriptor1 = getRandomMember(descriptors)
  var randomDescriptor2 = getRandomMember(descriptors)
  var randomCover = createCover(randomSrc, randomTitle, randomDescriptor1, randomDescriptor2)
  return randomCover
}

console.log(createRandomCover())

/*-------------------------------------DOM VARIABLES----------------------------------*/



/*-------------------------------------EVENT LISTENERS----------------------------------*/




// Create variables targetting the relevant DOM elements here 👇

// var newCoverPhoto = document.querySelector('.cover-image');
// newCoverPhoto.src = './assets/glorious.jpg'

// Test comment 

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

// function createCover(imgSrc, title, descriptor1, descriptor2) {
//   var cover = {
//     id: Date.now(),
//     coverImg: imgSrc,
//     title: title,
//     tagline1: descriptor1,
//     tagline2: descriptor2
//   }
//   return cover
// }




// we need to select a random picture from the covers array in data.js
// we need to select a random title from the titles array in data.js
// we need to select a random tagline from the descriptors in the data.js
// we need to select a random tagline from the descriptors in the data.js
