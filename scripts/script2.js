// Hamburger menu bron: https://youtu.be/aNDqzlAKmZc?si=_QBkHuhMWLj0btXJ

const hamburgerStreepjes = document.querySelector("nav button");

const hamburgerMenu = document.querySelector("ul");

hamburgerStreepjes.addEventListener("click", () => {
  hamburgerStreepjes.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});





// play pause button pagina 1 bron: chatgpt
const video = document.querySelector('main section:nth-of-type(4) video');
const pauseButton = document.querySelector('main section:nth-of-type(4) img:nth-of-type(1)');
const playButton = document.querySelector('main section:nth-of-type(4) img:nth-of-type(2)');

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

// Update button visibility when the video plays
video.addEventListener('play', () => {
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
});

// Update button visibility when the video pauses
video.addEventListener('pause', () => {
  playButton.style.display = 'block';
  pauseButton.style.display = 'none';
});

// Add event listeners to buttons
playButton.addEventListener('click', togglePlayPause);
pauseButton.addEventListener('click', togglePlayPause);

// Initialize button visibility on page load
initializeButtonState();




//video geluid
const geluidKnop = document.querySelector('main section:nth-of-type(4) img:nth-of-type(3)')
const muteKnop = document.querySelector('main section:nth-of-type(4) img:nth-of-type(4)')

geluidKnop.onclick = geluidAan
function geluidAan(){
  video.muted = false
}

muteKnop.onclick = geluidUit
function geluidUit(){
  video.muted = true
}


