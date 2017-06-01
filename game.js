// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start() {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners(dots) {
  var length = dots.length;
  for (var i = 0; i < length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}




function makeGreen(evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
  evt.preventDefault()
  evt.target.classList.toggle('blue')
  updateCounts()
}

// CREATE FUNCTION hide HERE
function hide(evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}


function updateCounts() {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  var BoardCount = document.getElementsByClassName("board")[0].children;

  for (var i = 0; i < BoardCount.length; i++) {
    if (BoardCount[i].classList.contains('blue')) {
      console.log("blue");
      totals.blue++;
    }
    else if (BoardCount[i].classList.contains('green')) {
      console.log("green");
      totals.green++;
    }
    else (BoardCount[i].classList.contains('invisible'))
    {
      console.log("invisible");
      totals.invisible++;
    }
  }
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}


function displayTotals(totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
