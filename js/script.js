"use strict";

window.addEventListener("DOMContentLoaded", () => {

    // The started js const and let

    const laoder = document.querySelector(".loader"),
          header = document.querySelector(".header"),
          openNavBtn = document.querySelector("#openNav"),
          closeNavBtn = document.querySelector("#closeNav"),
          navbar = document.querySelector(".nav-link"),
          openCont = document.querySelector(".btn"),
          closeCont = document.querySelector(".open-cont"),
          contactbox = document.querySelector(".contact"),
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
    });

    // The started openNav or closeNav

    openNavBtn.addEventListener("click", () => {
        navbar.style.display = "flex";
    })    

    closeNavBtn.addEventListener("click", () => {
        navbar.style.display = "none";
    });

    // The started open or close contactbox

    openCont.addEventListener("click", () => {
        setTimeout(() => {
            laoder.style.display = "flex";
        },100);
        setTimeout(() => {
            laoder.style.display = "none";
        },1000)
        contactbox.style.display = "flex";
    })

    closeCont.addEventListener("click", () => {
        setTimeout(() => {
            laoder.style.display = "flex";
        },100);
        setTimeout(() => {
            laoder.style.display = "none";
        },1000)
        contactbox.style.display = "none"
    })

})