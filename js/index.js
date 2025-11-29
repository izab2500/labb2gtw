"use strict"

/*Dom-element */
const navEl = document.querySelector("#nav")
const parentIcons = document.querySelector("#parent-icons")
const open = document.querySelector("#open")
const close = document.querySelector("#close")
const imagesContainers = document.querySelectorAll("figure")


/*Toggle nav */
function toggleNav(evt) {
    const target = evt.target
    if (target.id !== "close" && target.id !== "open") return

    open.classList.toggle("show")
    close.classList.toggle("show")
    navEl.classList.toggle("hidden-nav-mobile")
}

parentIcons.addEventListener("click", toggleNav)
