const hamIcon = document.querySelector(".hamicon");
const overlay = document.querySelector(".overlay");
const header = document.querySelector("header");

const toogleClass = () => {
    const navItems = document.querySelector(".navbar");

    navItems.classList.toggle("active");
}


const widthChange = function () {
    const navItems = document.querySelector(".navbar");
    const scrollpos = document.body.scrollTop || document.documentElement.scrollTop;

    if(scrollpos != 0 && navItems.classList.contains("active")){
        navItems.classList.remove("active")
    }
}

// console.log("running")
window.addEventListener("orientationchange", widthChange);
window.addEventListener("resize", widthChange);
hamIcon.addEventListener("click", toogleClass);
overlay.addEventListener("click", toogleClass);