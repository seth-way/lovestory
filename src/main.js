

var savedCovers = [];
var currentCover;

/*-------------------------------------DOM VARIABLES----------------------------------*/
// ----------- VIEWS --------------
// TODO: 
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
var miniCovers = document.querySelectorAll('.mini-cover')

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
  console.log('COVER WAS MADE:', cover.id);
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

// TODO: use 1 cover object instead 4 to parameters 
function updateMainCover(cover) {
  newCoverPhoto.src = cover.coverImg
  newCoverTitle.innerText = cover.title
  newDescriptor1.innerText = cover.tagline1
  newDescriptor2.innerText = cover.tagline2
  // update the currentCover to hold the input (param) cover
  currentCover = cover;
  // var currentCoverBook = {
  //   coverImg: newCoverPhoto.src,
  //   title: newCoverTitle.innerText,
  //   tagline1: newDescriptor1.innerText,
  //   tagline2: newDescriptor2.innerText
  // }
  // return currentCoverBook
}

function showRandomCover() {
  var randomCover = createCover()
  updateMainCover(randomCover)
}

// function updateView(DOMelement, ex. homeView) --> loop through the 3 views
// unhide the input, hide the other 2 
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
  updateMainCover(userCover);
  // switch back to the home view
  changedToHomeView();

  event.preventDefault();
}

function makeMiniCoverElement(cover) {
  var coverImg = cover.coverImg;
  var title = cover.title;
  var tagline1 = cover.tagline1;
  var tagline2 = cover.tagline2;
  // create a var for an empty string...
  // and add the below code to it in chunks
  var miniCoverHTML = '';
  // create the html for the mini cover element

  // to create the element -> document.createElement('div')
  // element.classList.add('minicover');
  // element.id = ???
  // NOT SURE IF THIS NEXT PART IS ALLOWED, BUT....
  // document.createElement('img') ... update class and src
  // create element h2, update class & innerText
  // create element h3, add class tagline
  // update h3 inner Text
  // create img, update class to overlay and src to "./assets/overlay.png"
  // append to main minicover element -> coverImg, h2, h3, & overlay using (parent.appendChild(child))
  // return minicover

  // <div class='mini-cover'>
  miniCoverHTML += `<div class="mini-cover" id=${cover.id}>`;
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
  for (var i = 0; i < savedCovers.length; i++) {
    // ex. [cover0, cover1, cover2, cover3, cover4] 

    // grab cover at each idx and store it in variable
    var currentCover = savedCovers[i];
    // transform mini cover into HTML (using function above)
    var currentCoverAsHTML = makeMiniCoverElement(currentCover);
    savedCoversSection.innerHTML += currentCoverAsHTML;
  }
  // query select alllllll mini-books.. and see if we can do that?
  miniCovers = document.querySelectorAll('.mini-cover');
  // for loop over minicovers
  for (var i = 0; i < miniCovers.length; i++) {
    miniCovers[i].addEventListener('dblclick', removeSavedBook)
  }
  // at each cover, add event listerner to cover for double click.
  // miniCovers[i].addEventListener
}

function removeSavedBook(event) {
  var targetID = event.currentTarget.id
  // loop over savedCovers array
  console.log('this worked, id is ...', targetID);
  for (var i = 0; i < savedCovers.length; i++) {
    if (targetID === savedCovers[i].id.toString()) {
      savedCovers.splice(i, 1)
    }
  }
  // at each idx (cover) check if cover's id matches targetID
  // if it does.... remove it
  appendSavedCoversToDOM()
  // when the loop is complete..... append savedcovers to DOM again.
  event.preventDefault();
}

// TODO: make function to add main cover to saved covers array
function saveUserCovers() {
  // var currentBookCovers = currentCover

  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
    appendSavedCoversToDOM()
  }

}

// remember to check array first for match, if doesnt exist.... then add it


/*-------------------------------------EVENT LISTENERS----------------------------------*/

randomCoverBtn.addEventListener('click', showRandomCover)

makeOwnCoverBtn.addEventListener('click', changeToFormView)

viewSavedBtn.addEventListener('click', changedSavedView)

homeBtn.addEventListener('click', changedToHomeView)

createBookBtn.addEventListener('click', userBookInputs)//New make book 

// TODO: add event listener for save cover button.
saveCoverBtn.addEventListener('click', saveUserCovers)

/*-------------------------------------ON PAGE LOAD----------------------------------*/
showRandomCover()
// appendSavedCoversToDOM()
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
