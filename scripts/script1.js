// play pause button pagina 1 bron: chatgpt
const video = document.querySelector('video');
const pauseButton = document.querySelector('main section:nth-of-type(1) button:nth-of-type(1)');
const playButton = document.querySelector('main section:nth-of-type(1) button:nth-of-type(2)');

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









// filter knop
const filter = document.querySelector("main section:nth-of-type(2) button:nth-of-type(1)");

const uitgeklaptFilter = document.querySelector("main ul:nth-of-type(1)");

const closeButton = document.querySelector(
  "main ul:nth-of-type(1) li:nth-of-type(1) button"
);

const bekijkProducten = document.querySelector(
  "main ul:nth-of-type(1) li:nth-of-type(4) button:nth-of-type(1)"
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
const sorteer = document.querySelector("main section:nth-of-type(2) button:nth-of-type(2)");

const uitgeklaptSorteer = document.querySelector("main section:nth-of-type(2) ul:nth-of-type(2)");

const closeSorteer = document.querySelector(
  "main ul:nth-of-type(2) li:nth-of-type(1) button"
);

const bekijksorteer = document.querySelector(
  "main ul:nth-of-type(2) li:nth-of-type(5) button:nth-of-type(1)"
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