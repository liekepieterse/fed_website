// JavaScript Document
console.log("hi");


// Hamburger menu bron: https://youtu.be/aNDqzlAKmZc?si=_QBkHuhMWLj0btXJ

const hamburgerStreepjes = document.querySelector("nav button");

const hamburgerMenu = document.querySelector("ul");

hamburgerStreepjes.addEventListener("click", () => {
  hamburgerStreepjes.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});





// filter knop
const filter = document.querySelector("main button:nth-of-type(1)");

const uitgeklaptFilter = document.querySelector("main ul:nth-of-type(1)");

const closeButton = document.querySelector(
  "main ul:nth-of-type(1) li:nth-of-type(1) img"
);

const bekijkProducten = document.querySelector(
  "main ul:nth-of-type(1) button:nth-of-type(1)"
);

filter.addEventListener("click", () => {
  uitgeklaptFilter.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  uitgeklaptFilter.classList.remove("active");
});

closeButton.addEventListener("click", () => {
  uitgeklaptFilter.classList.remove("active");
});

bekijkProducten.addEventListener("click", () => {
  uitgeklaptFilter.classList.remove("active");
});






// sorteer knop
const sorteer = document.querySelector("main button:nth-of-type(2)");

const uitgeklaptSorteer = document.querySelector("main ul:nth-of-type(2)");

const closeSorteer = document.querySelector(
  "main ul:nth-of-type(2) li:nth-of-type(1) img"
);

const bekijksorteer = document.querySelector(
  "main ul:nth-of-type(2) button:nth-of-type(1)"
);

sorteer.addEventListener("click", () => {
  uitgeklaptSorteer.classList.toggle("active");
});

closeSorteer.addEventListener("click", () => {
  uitgeklaptSorteer.classList.remove("active");
});

closeSorteer.addEventListener("click", () => {
  uitgeklaptSorteer.classList.remove("active");
});

bekijksorteer.addEventListener("click", () => {
  uitgeklaptSorteer.classList.remove("active");
});







// play pause button pagina 1 bron: chatgpt
const video = document.querySelector('video');
const pauseButton = document.querySelector('main section:nth-of-type(1) img:nth-of-type(1)');
const playButton = document.querySelector('main section:nth-of-type(1) img:nth-of-type(2)');

// Set the initial button visibility based on the video's state
function initializeButtonState() {
  if (video.paused) {
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
  } else {
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
  }
}

// Toggle play and pause state
function togglePlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update button visibility when the video plays or pauses
video.addEventListener('play', () => {
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
});

video.addEventListener('pause', () => {
  playButton.style.display = 'block';
  pauseButton.style.display = 'none';
});

// Add event listeners to buttons
playButton.addEventListener('click', togglePlayPause);
pauseButton.addEventListener('click', togglePlayPause);

// Initialize button visibility on page load
initializeButtonState();
