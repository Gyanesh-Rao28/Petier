const leftText = document.querySelector(".left-text");
const rightText = document.querySelector(".right-text");
const contentImg = document.getElementById("content-img");

window.addEventListener('scroll',function(){
    let value = window.scrollY;

    leftText.style.right = value * 1 + "px";
    rightText.style.left = value * 1 + "px";
    contentImg.style.bottom = value * .5+ "px";
})
