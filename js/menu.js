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

const menuFilter = document.getElementById("menu-filter");
const menuBtn = document.querySelectorAll(".menu-btn");

menuBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    btn.classList.add("selected");
  })
})




