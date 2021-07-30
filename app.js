console.log("hello");

const hamButton = document.querySelector(".hamburgerer");
const mobileMenu = document.querySelector(".mobile-menu");

hamButton.addEventListener("click", function(){

    if (mobileMenu.classList.contains("mb-close")) {
        mobileMenu.classList.remove("mb-close");
    } else {
        mobileMenu.classList.add("mb-close");   
    }
});