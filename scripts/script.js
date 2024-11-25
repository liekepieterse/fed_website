// JavaScript Document
console.log("hi");

const hamburgerStreepjes= document.querySelector('nav button');

const hamburgerMenu = document.querySelector('ul');

hamburgerStreepjes.addEventListener('click', () =>{
  hamburgerStreepjes.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
})
//  bron hamburger menu: https://youtu.be/aNDqzlAKmZc?si=_QBkHuhMWLj0btXJ