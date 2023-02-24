let openBtn = document.querySelector('#openBtn');
let closeBtn = document.querySelector('#closeBtn');
let mobileMenu = document.querySelector("#mobileMenu")
let body = document.querySelector('body');
let overlayDiv = document.querySelector('#overlayDiv')

function functiondisable() {
    body.classList.add("stop-scrolling");
}

function functionenable() {
    body.classList.remove("stop-scrolling");
}

openBtn.addEventListener("click", () => {
    mobileMenu.classList.add('mobile-menu-active');
    setTimeout( () => {
        closeBtn.classList.add('active')
    },300)
    overlayDiv.classList.add('overlay-active');

    functiondisable();
})

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove('mobile-menu-active');
    closeBtn.classList.remove('active')
    overlayDiv.classList.remove('overlay-active');

    functionenable() ;
})
