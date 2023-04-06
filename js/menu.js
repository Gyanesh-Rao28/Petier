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

// const menuFilter = document.getElementById("menu-filter");
// const menuBtn = document.querySelectorAll(".filter-btn");

// menuBtn.forEach((btn)=>{
//   btn.addEventListener('click',()=>{
//     btn.classList.add("selected");
//   })
// })

// menu section

// menu array

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
    category: "cat",
    breed: "CAT",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/cat/cat1.jpg",
    gender: `Female`,
  },
  {
    id: 6,
    category: "bird",
    breed: "BIRD",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/bird/bird1.jpg",
    gender: `Female`,
  },
  {
    id: 7,
    category: "food",
    breed: "DOG",
    age: "2 yr",
    location: "mumbai",
    img: "./imgs/food/food1.jpg",
    gender: `Female`,
  },
];

const menuSection = document.getElementById("menu-grid");
const menuFilter = document.getElementById("menu-filter");

// btn switch

// function glow(category) {
//   filterBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       console.log(btn.innerHTML, category);
//       btn.classList.add("selected");
//     });
//   });
// }

// loading

window.addEventListener("DOMContentLoaded", function () {
  displayMenuPet(menu);

  const categories = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );

  const categoryBtn = categories
    .map((category) => {
      return `<li class="filter-btn" data-id=${category}>${category}</li>`;
    })
    .join("");

  menuFilter.innerHTML = categoryBtn;

  const filterBtn = document.querySelectorAll(".filter-btn");

  // filter-menu-btn
  filterBtn.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((pet) => {
        if (pet.category == category) {
          return category;
        }
      });
      if (category == "all") {
        displayMenuPet(menu);
      } else {
        displayMenuPet(menuCategory);
      }

      btn.classList.add("selected"); // to be continued
    });
  });
});

// displayMenu function

function displayMenuPet(menuPet) {
  let displayMenu = menuPet.map((pet) => {
    return `<div class="menu-box" data-aos="zoom-in-up">
          <div class="box-img">
            <img src=${pet.img} class="photo">
          </div>
          <div class="menu-des">
            <p>Breed - ${pet.breed}</p>
            <p>Age - ${pet.age}</p>
            <p>Location - ${pet.location}</p>
            <p>Gender - ${pet.gender}</p>
            <button class="menu-more"><img src="/imgs/pngs/arrow.png" style="transform: rotate(-180deg);"></button>
          </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  menuSection.innerHTML = displayMenu;
}


