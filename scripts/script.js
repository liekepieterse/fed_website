// JavaScript Document
console.log("hi");

const hamburgerStreepjes= document.querySelector('nav button');

const hamburgerMenu = document.querySelector('ul');

hamburgerStreepjes.addEventListener('click', () =>{
  hamburgerStreepjes.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
})
//  bron hamburger menu: https://youtu.be/aNDqzlAKmZc?si=_QBkHuhMWLj0btXJ


const filter= document.querySelector('main button:nth-of-type(1)');

const uitgeklaptFilter = document.querySelector('main ul:nth-of-type(2)');

filter.addEventListener('click', () =>{
  filter.classList.toggle('active');
  uitgeklaptFilter.classList.toggle('active');
})