

var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

/*-------------------------------------DOM VARIABLES----------------------------------*/
// ----------- VIEWS --------------
var homeView = document.querySelector('.home-view')
var savedView = document.querySelector('.saved-view')
var formView = document.querySelector('.form-view')
// ----------- BUTTONS -------------
var randomCoverBtn = document.querySelector('.random-cover-button');

var saveCoverBtn = document.querySelector('.save-cover-button')

var makeOwnCoverBtn = document.querySelector('.make-new-button')

var homeBtn = document.querySelector('.home-button')

var viewSavedBtn= document.querySelector('.view-saved-button')



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


function updateMainCover(imgSrc, title, descriptor1, descriptor2) {
  var newCoverPhoto = document.querySelector('.cover-image');
  newCoverPhoto.src = imgSrc;
  var newCoverTitle = document.querySelector('.cover-title')
  newCoverTitle.innerText = title
  var newDescriptor1 = document.querySelector('.tagline-1')
  newDescriptor1.innerText = descriptor1
  var newDescriptor2 = document.querySelector('.tagline-2')
  newDescriptor2.innerText = descriptor2

}

function showRandomCover() {
var randomCover = createRandomCover()
updateMainCover(randomCover.coverImg, randomCover.title, randomCover.tagline1, randomCover.tagline2)
console.log(randomCover)
  
}

showRandomCover()


function changeToFormView() {
  homeView.classList.add('hidden')
  savedView.classList.add('hidden')
  formView.classList.remove('hidden')
  randomCoverBtn.classList.add('hidden')
  saveCoverBtn.classList.add('hidden')
  homeBtn.classList.remove('hidden')
}

function changedSavedView() {
  homeView.classList.add('hidden')
  savedView.classList.remove('hidden')
  formView.classList.add('hidden')
  saveCoverBtn.classList.add('hidden')
  randomCoverBtn.classList.add('hidden')
  homeBtn.classList.remove('hidden')
}

function changedToHomeView() {
  homeView.classList.remove('hidden')
  savedView.classList.add('hidden')
  formView.classList.add('hidden')
  homeBtn.classList.add('hidden')
  saveCoverBtn.classList.remove('hidden')
  randomCoverBtn.classList.remove('hidden')
}


/*-------------------------------------EVENT LISTENERS----------------------------------*/

randomCoverBtn.addEventListener('click', showRandomCover)

makeOwnCoverBtn.addEventListener('click', changeToFormView)

viewSavedBtn.addEventListener('click', changedSavedView)

homeBtn.addEventListener('click', changedToHomeView)




// Create variables targetting the relevant DOM elements here 👇

// var newCoverPhoto = document.querySelector('.cover-image');
// newCoverPhoto.src = './assets/glorious.jpg'

// Test comment 

// We've provided a few variables below


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
