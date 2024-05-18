

var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
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
// TODO: add selector for save cover button
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
var savedCoversSection = document.querySelector('.saved-covers-section')

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
  appendSavedCoversToDOM();
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

function makeMiniCoverElement(cover) {
 var coverImg = cover.coverImg;
 var title = cover.title;
  var tagline1 = cover.tagline1;
  var tagline2 =  cover.tagline2;
  // create a var for an empty string...
  // and add the below code to it in chunks
  var miniCoverHTML = '';
  // create the html for the mini cover element
  
  // <div class='mini-cover'>
  miniCoverHTML += '<div class="mini-cover">';
  //   <img class='cover-image' src=`${}`> ??? Not so sure about cover-image
  miniCoverHTML += `<img class="cover-image" src=${coverImg}>`
  //   <h2 class='cover-title'`{title}`</h2>
  miniCoverHTML += `<h2 class="cover-title">${title}</h2>`
  //   <h3 class='tagline'>A tale of <span class="tagline-1">`${tg1}</span> and <span class="tagline-2">`${tg}</span></h3>
  miniCoverHTML += `<h3 class="tagline">A tale of <span class="tagline-1">${tagline1}</span> and <span class="tagline-2">${tagline2}</span></h3>`
  //   <img class="overlay" src="./assets/overlay.png">
  miniCoverHTML += `<img class="overlay" src="./assets/overlay.png">`
  // </div>
  miniCoverHTML += `</div>`
  // return the result string
  return miniCoverHTML
}

function appendSavedCoversToDOM() {
  // clear innerHTML of the .saved-covers-section
  savedCoversSection.innerHTML = '';

  // loop over all saved covers 
  for(var i = 0; i < savedCovers.length; i++) {
    // ex. [cover0, cover1, cover2, cover3, cover4] 

    // grab cover at each idx and store it in variable
    var currentCover = savedCovers[i];
    // transform mini cover into HTML (using function above)
    var currentCoverAsHTML = makeMiniCoverElement(currentCover);
    // append this HTML string to the savedCoversSection's inner html
    savedCoversSection.innerHTML += currentCoverAsHTML;
  }
}

// TODO: make function to add main cover to saved covers array
// remember to check array first for match, if doesnt exist.... then add it


/*-------------------------------------EVENT LISTENERS----------------------------------*/

randomCoverBtn.addEventListener('click', showRandomCover)

makeOwnCoverBtn.addEventListener('click', changeToFormView)

viewSavedBtn.addEventListener('click', changedSavedView)

homeBtn.addEventListener('click', changedToHomeView)

createBookBtn.addEventListener('click', userBookInputs)//New make book 

// TODO: add event listener for save cover button.

/*-------------------------------------ON PAGE LOAD----------------------------------*/
showRandomCover()
appendSavedCoversToDOM()
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
