"use strict";

window.addEventListener("DOMContentLoaded", () => {

    // The started js const and let

    const laoder = document.querySelector(".loader"),
          header = document.querySelector(".header"),
          navLinks = document.querySelectorAll(".link");

    // The started loader

 function load(){
    setTimeout(() => {
        laoder.style.display = "none";
        setTimeout(() => {
            laoder.style.opacity = 0.5;
        },2500)
    },3000);
 } load();

    // The started header

    window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    // The started links
    
    navLinks.forEach((item) => {
        item.addEventListener("click", () => {
            setTimeout(() => {
                laoder.style.display = "flex";
            },100);
            setTimeout(() => {
                laoder.style.display = "none";
            },1000)
        })
    })
})