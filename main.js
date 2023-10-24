let icon = document.querySelector(".icon");
let navbar = document.querySelector(".navbar");

icon.addEventListener("click", ()=>{
    navbar.classList.toggle(".showData");
    console.log(navbar);
});