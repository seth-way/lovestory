

var savedCovers = [];
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
var createBookBtn = document.querySelector('.create-new-book-button')
// -------------- INPUT -----------
var coverInput = document.querySelector('.user-cover')
var titleInput = document.querySelector('.user-title')
var descOneInput = document.querySelector('.user-desc1')
var descTwoInput = document.querySelector('.user-desc2')
// -------------- MAIN PHOTO -----------
var mainCoverPhoto = document.querySelector('.cover-image')
var mainCoverTitle = document.querySelector('.cover-title')
var mainDescriptor1 = document.querySelector('.tagline-1')
var mainDescriptor2 = document.querySelector('.tagline-2')
// -------------- OTHER -----------
var savedCoversSection = document.querySelector('.saved-covers-section')
var miniCovers = document.querySelectorAll('.mini-cover')
/*-------------------------------------FUNCTIONS----------------------------------*/

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// takes 4 arguments, makes a cover
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

function updateMainCover(cover) {
  mainCoverPhoto.src = cover.coverImg
  mainCoverTitle.innerText = cover.title
  mainDescriptor1.innerText = cover.tagline1
  mainDescriptor2.innerText = cover.tagline2
  // update the currentCover to hold the input (param) cover
  currentCover = cover;
}

function showRandomCover() {
  var randomCover = createCover()
  updateMainCover(randomCover)
}

// unhide the input, hide the other 2 views
function makeViewVisible(view) {
  var views = [homeView, savedView, formView];
  // before loop.... remove the hidden class fron input view
  view.classList.remove('hidden')
  for(var i = 0; i < views.length; i++) {
    var currentView = views[i]
    // if the view !== currentView
    if(view !== currentView) {
      currentView.classList.add('hidden')
    }
  }
}

function changeToFormView() {
  makeViewVisible(formView)
  randomCoverBtn.classList.add('hidden')
  saveCoverBtn.classList.add('hidden')
  homeBtn.classList.remove('hidden')
}

function changeToSavedView() {
  makeViewVisible(savedView)
  saveCoverBtn.classList.add('hidden')
  randomCoverBtn.classList.add('hidden')
  homeBtn.classList.remove('hidden')
}

function changeToHomeView() {
  makeViewVisible(homeView)
  homeBtn.classList.add('hidden')
  saveCoverBtn.classList.remove('hidden')
  randomCoverBtn.classList.remove('hidden')
}

function makeCoverFromInputs(event) {
  // Create a new cover from 4 input fields
  var inputSource = coverInput.value;
  var inputTitle = titleInput.value;
  var inputDescriptor1 = descOneInput.value;
  var inputDescriptor2 = descTwoInput.value;

  var userCover = createCover(inputSource, inputTitle, inputDescriptor1, inputDescriptor2);
  // put that cover into the saved covers array (UP TOP)
  savedCovers.push(userCover);
  appendSavedCoversToDOM();
  // put the 4 values into the 3 data arrays (covers, titles, descriptors)
  covers.push(inputSource);
  titles.push(inputTitle);
  descriptors.push(inputDescriptor1, inputDescriptor2);
  // update the main home view cover to match the new user created cover
  updateMainCover(userCover);
  // switch back to the home view
  changedToHomeView();

  event.preventDefault();
}

function makeMiniCoverElement(cover) {
  var newMiniCover = document.createElement('div');
  newMiniCover.classList.add('mini-cover');
  newMiniCover.id = cover.id;

  var newMiniImg = document.createElement('img')
  newMiniImg.classList.add('cover-image')
  newMiniImg.src = cover.coverImg;

  var newMiniTitle = document.createElement('h2');
  newMiniTitle.classList.add('cover-title')
  newMiniTitle.innerText = cover.title

  var newMiniTagLine = document.createElement('h3')
  newMiniTagLine.classList.add('tagline')
  newMiniTagLine.innerHTML = `A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span>`

  var overlayImg = document.createElement('img')
  overlayImg.classList.add('overlay')
  overlayImg.src = './assets/overlay.png'

  newMiniCover.append(newMiniImg, newMiniTitle, newMiniTagLine, overlayImg)

  return newMiniCover;
}

function appendSavedCoversToDOM() {
  // clear innerHTML of the .saved-covers-section
  savedCoversSection.innerHTML = '';

  // loop over all saved covers 
  for (var i = 0; i < savedCovers.length; i++) {
    // grab cover at each idx and store it in variable
    var currentCover = savedCovers[i];
    // transform mini cover into DOM node (using function above)
    var currentCoverAsDOMNode = makeMiniCoverElement(currentCover);
    // Add evemt listener to new node
    currentCoverAsDOMNode.addEventListener('dblclick', removeSavedBook)
    savedCoversSection.appendChild(currentCoverAsDOMNode);
  }
}

function removeSavedBook(event) {
  var targetID = event.currentTarget.id
  // loop over savedCovers array
  for (var i = 0; i < savedCovers.length; i++) {
    // at each idx (cover) check if cover's id matches targetID
    if (targetID === savedCovers[i].id.toString()) {
       // if it does.... remove it
      savedCovers.splice(i, 1)
    }
  }
  // when the loop is complete..... append savedcovers to DOM again.
  appendSavedCoversToDOM()

  event.preventDefault();
}

function saveUserCovers() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
    appendSavedCoversToDOM()
  }
}

/*-------------------------------------EVENT LISTENERS----------------------------------*/
randomCoverBtn.addEventListener('click', showRandomCover)
makeOwnCoverBtn.addEventListener('click', changeToFormView)
viewSavedBtn.addEventListener('click', changeToSavedView)
homeBtn.addEventListener('click', changeToHomeView)
createBookBtn.addEventListener('click', makeCoverFromInputs)
saveCoverBtn.addEventListener('click', saveUserCovers)
/*-------------------------------------ON PAGE LOAD----------------------------------*/
showRandomCover()
