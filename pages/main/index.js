console.log("Реализация попап на обеих страницах: +12");

// alert(
//   "Приветствую! Я очень прошу Вас войти в положение: всю неделю лежала с температурой 39," +
//     " соответственно особо ничего не успела сделать. Если Вам будет не сложно, то очень прошу проверить мою работу ~ в четверг, " +
//     "я постараюсь за эти пару дней сделать немного больше, чем ничего. Спасибо :)"
// );

import petsList from "./pets.js";

let body = document.querySelector(".body");
let friendCards = document.querySelectorAll(".friend");
let modalWindow = document.querySelector(".modal-window");
let closeModalWindow = document.querySelector(".close-modal-window");
let ourFriends = document.querySelector(".our-friends .container");

const friendCardClick = (event) => {
  let animalImg = document.querySelector(".animal-img");
  let animalName = document.querySelector(".animal-name");
  let animalTypeBreed = document.querySelector(".animal-type-breed");
  let animalDescription = document.querySelector(".animal-description");

  let age = document.querySelector(".age");
  let inoculations = document.querySelector(".inoculations");
  let diseases = document.querySelector(".diseases");
  let parasites = document.querySelector(".parasites");

  let currElement = event.target.classList.contains("friend")
    ? event.target
    : event.target.parentNode;

  let animalNameCurrent = currElement.classList[1];

  petsList.forEach((element) => {
    if (element.name === animalNameCurrent) {
      animalImg.src = element.img;
      animalName.innerHTML = element.name;
      animalTypeBreed.innerHTML = element.type + " - " + element.breed;
      animalDescription.innerHTML = element.description;

      age.innerHTML = element.age;
      inoculations.innerHTML = element.inoculations;
      diseases.innerHTML = element.diseases;
      parasites.innerHTML = element.parasites;
    }
  });

  modalWindow.classList.toggle("active-window");
  body.style.overflowY = "hidden";
  // modalWindow.style.overflowY = "scroll";

  if (window.outerWidth > 1280) {
    modalWindow.style.width = "100%";
  } else {
    modalWindow.style.width = ourFriends.offsetWidth + "px";
  }

  // console.log(modalWindow.style.width);
};

friendCards.forEach((element) => {
  element.addEventListener("click", friendCardClick);
});

const closeModalWindowFunction = (event) => {
  modalWindow.classList.toggle("active-window");
  body.style.overflowY = "scroll";
};

closeModalWindow.addEventListener("click", closeModalWindowFunction);

document.addEventListener("click", (event) => {
  // при нажатии на область вокруг попапа он закрывается
  if (modalWindow.classList.contains("active-window")) {
    if (event.target.classList.contains("modal-window")) {
      closeModalWindowFunction();
    }
  }
});
