const imageSlide = document.querySelector(".image-slide");
const imagePictures = document.querySelectorAll(".image-slide img");

// Buttons
const previousButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");

// Counter
let counter = 1;
const size = imagePictures[0].clientWidth;

imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";

// Button Listeners
nextButton.addEventListener("click",() => {
    if (counter >= imagePictures.length -1){
        return;
    }
    imageSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

previousButton.addEventListener("click",() => {
    if (counter <= 0){
        return;
    }
    imageSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

imageSlide.addEventListener("transitionend",() => {
    if (imagePictures[counter].id === "lastClone"){
        imageSlide.style.transition = "none";
        counter = imagePictures.length - 2;
        imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if (imagePictures[counter].id === "firstClone"){
        imageSlide.style.transition = "none";
        counter = imagePictures.length - counter;
        imageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});