

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

var viewSavedBtn = document.querySelector('.view-saved-button')

var createBookBtn = document.querySelector('.create-new-book-button')// New

// -------------- INPUT -----------
var coverInput = document.querySelector('.user-cover')
var titleInput = document.querySelector('.user-title')//New
var descOneInput = document.querySelector('.user-desc1')
var descTwoInput = document.querySelector('.user-desc2')
// -------------- MAIN PHOTO -----------
var newCoverPhoto = document.querySelector('.cover-image')
var newCoverTitle = document.querySelector('.cover-title')
var newDescriptor1 = document.querySelector('.tagline-1')
var newDescriptor2 = document.querySelector('.tagline-2')
// -------------- OTHER -----------
// var body = document.querySelector('body');
/*-------------------------------------FUNCTIONS----------------------------------*/

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//takes 4 arguments, makes a cover
function createCover(imgSrc, title, descriptor1, descriptor2) {
  if (!imgSrc) { imgSrc = getRandomMember(covers); }
  if (!title) { title = getRandomMember(titles); }
  if (!descriptor1) { descriptor1 = getRandomMember(descriptors); }
  if (!descriptor2) { descriptor2 = getRandomMember(descriptors); }

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

// makes a random cover, with no arguments
// function createRandomCover() {
//   var randomSrc = getRandomMember(covers)
//   var randomTitle = getRandomMember(titles)
//   var randomDescriptor1 = getRandomMember(descriptors)
//   var randomDescriptor2 = getRandomMember(descriptors)
//   var randomCover = createCover(randomSrc, randomTitle, randomDescriptor1, randomDescriptor2)
//   return randomCover
// }


function updateMainCover(imgSrc, title, descriptor1, descriptor2) {
  newCoverPhoto.src = imgSrc;
  newCoverTitle.innerText = title
  newDescriptor1.innerText = descriptor1
  newDescriptor2.innerText = descriptor2
}

function showRandomCover() {
  var randomCover = createCover()
  updateMainCover(randomCover.coverImg, randomCover.title, randomCover.tagline1, randomCover.tagline2)
}

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


//New
function userBookInputs(event) {

  // Create a new cover from 4 input fields
  var imgSource = coverInput.value;
  var imgTitle = titleInput.value;
  var imgDescriptor1 = descOneInput.value;
  var imgDescriptor2 = descTwoInput.value;

  var userCover = createCover(imgSource, imgTitle, imgDescriptor1, imgDescriptor2);
  // put that cover into the saved covers array (UP TOP)
  savedCovers.push(userCover);
  // put the 4 values into the 3 data arrays (covers, titles, descriptors)
  covers.push(imgSource);
  titles.push(imgTitle);
  descriptors.push(imgDescriptor1, imgDescriptor2);
  // update the main home view cover to match the new user created cover
  updateMainCover(imgSource, imgTitle, imgDescriptor1, imgDescriptor2);
  // switch back to the home view
  changedToHomeView();

  event.preventDefault();
}


/*-------------------------------------EVENT LISTENERS----------------------------------*/

randomCoverBtn.addEventListener('click', showRandomCover)

makeOwnCoverBtn.addEventListener('click', changeToFormView)

viewSavedBtn.addEventListener('click', changedSavedView)

homeBtn.addEventListener('click', changedToHomeView)

createBookBtn.addEventListener('click', userBookInputs)//New make book 

// titleInput.addEventListener('input', userBookInputs)//New

/*-------------------------------------ON PAGE LOAD----------------------------------*/
showRandomCover()
console.log('PAGE RELOADED.')

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
