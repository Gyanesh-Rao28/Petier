// const menu = [
//   {
//     id: 1,
//     category: "dog",
//     breed: "DOG",
//     age: "2 yr",
//     location: "mumbai",
//     img: "./imgs/dogs/dog1.jpg",
//     gender: `Female`,
//   },
//   {
//     id: 2,
//     category: "dog",
//     breed: "DOG",
//     age: "2 yr",
//     location: "mumbai",
//     img: "./imgs/dogs/dog2.jpg",
//     gender: `Female`,
//   },
//   {
//     id: 3,
//     category: "dog",
//     breed: "DOG",
//     age: "2 yr",
//     location: "mumbai",
//     img: "./imgs/dogs/dog3.jpg",
//     gender: `Female`,
//   },
//   {
//     id: 4,
//     category: "dog",
//     breed: "DOG",
//     age: "2 yr",
//     location: "mumbai",
//     img: "./imgs/dogs/dog4.jpg",
//     gender: `Female`,
//   },
//   {
//     id: 5,
//     category: "cat",
//     breed: "CAT",
//     age: "2 yr",
//     location: "mumbai",
//     img: "./imgs/cat/cat1.jpg",
//     gender: `Female`,
//   },
//   {
//     id: 6,
//     category: "bird",
//     breed: "BIRD",
//     age: "2 yr",
//     location: "mumbai",
//     img: "./imgs/bird/bird1.jpg",
//     gender: `Female`,
//   },
//   {
//     id: 7,
//     category: "food",
//     breed: "food",
//     age: "2 yr",
//     location: "mumbai",
//     img: "./imgs/food/food1.jpg",
//     gender: `Female`,
//   },
//   {
//     id: 8,
//     category: "bird",
//     breed: "BIRD",
//     age: "2 yr",
//     location: "mumbai",
//     img: "./imgs/bird/bird2.jpg",
//     gender: `Female`,
//   },
// ];
// donate

// selection

// import { menu } from "./menu.js";



const save = document.getElementById("save");
const breed = document.getElementById("breed");
const category = document.getElementById("category");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const loc = document.getElementById("location");
const mySrc = document.getElementById("myfile");
const photo = document.querySelector("#photo");

// dataVariables

let breedName, Category, Age, Gender, Loc, MySrc;
const randomNumber = Math.floor(Math.random() * 100);


// funtion
save.addEventListener("click", (event) => {
    event.preventDefault();
    breedName = breed.value;
    // console.log(breedName, Category, Age, Gender, Loc, MySrc);
    
    if (Category == undefined || MySrc == undefined) {
        alert("TRY AGAIN!")
    }else{
        menu.push({
          id: `${randomNumber}`,
          category: `${Category}`,
          breed: `${breedName}`,
          age: `${Age}`,
          location: `${Loc}`,
          img: `${MySrc}`,
          gender: `${Gender}`,
        });
    }

    console.log(menu);
    console.log(Category);

});

category.addEventListener("change", function () {
    Category = category.value;
    // console.log(Category);

});

age.addEventListener("change", function () {
  Age = age.value;
//   console.log(Age);
});

gender.addEventListener("change", function () {
  Gender = gender.value;
//   console.log(Gender);
});

loc.addEventListener("change", function () {
  Loc = loc.value;
//   console.log(Loc);
});

mySrc.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    MySrc = reader.result;
    photo.src = MySrc;
    // del.innerHTML = tel;
    // console.log(MySrc);
  });
  reader.readAsDataURL(this.files[0]);
});