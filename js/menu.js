const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

leftBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = 2;
  }

  slider();
});

rightBtn.addEventListener("click", () => {
  if (counter < slides.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  slider();
});

const slider = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};


// test

// btn switch

const menuFilter = document.getElementById("menu-filter");
const menuBtn = document.querySelectorAll(".menu-btn");

menuBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    btn.classList.add("selected");
  })
})

// menu 

const menu = [
  {
    id: 1,
    category: "dog",
    breed: "DOG",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/dogs/dog1.jpg",
    gender: `Female`,
  },
  {
    id: 2,
    category: "dog",
    breed: "DOG",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/dogs/dog2.jpg",
    gender: `Female`,
  },
  {
    id: 3,
    category: "dog",
    breed: "DOG",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/dogs/dog3.jpg",
    gender: `Female`,
  },
  {
    id: 4,
    category: "dog",
    breed: "DOG",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/dogs/dog4.jpg",
    gender: `Female`,
  },
  {
    id: 5,
    category: "dog",
    breed: "DOG",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/dogs/dog5.jpg",
    gender: `Female`,
  },
  {
    id: 6,
    category: "dog",
    breed: "DOG",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/dogs/dog6.jpg",
    gender: `Female`,
  },
  {
    id: 7,
    category: "dog",
    breed: "DOG",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/cat/cat1.jpg",
    gender: `Female`,
  },
];


const menuSection = document.getElementById("menu-grid");

window.addEventListener("DOMContentLoaded",function (){

let displayMenu = menu.map((item)=>{

  return `<div class="menu-box">
          <div class="box-img">
            <img src=${item.img} class="photo">
          </div>
          <div class="menu-des">
            <p>Breed - ${item.breed}</p>
            <p>Age - ${item.age}</p>
            <p>Location - ${item.location}</p>
            <p>Gender - ${item.gender}</p>
            <button class="menu-more"><img src="/imgs/pngs/arrow.png" style="transform: rotate(-180deg);"></button>
          </div>
        </div>`;

});

displayMenu = displayMenu.join("");
menuSection.innerHTML = displayMenu;
})