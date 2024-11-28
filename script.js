'use strict';

const shareBtn = document.querySelector('.share-btn');
const shareIcon = shareBtn.querySelector('.svg-path');

const shareWindowDesktop = document.querySelector('.share__pop-up__desktop');
const shareWindowMobile = document.querySelector('.share-bg');

// shareBtn.addEventListener('mouseover')

console.log("I work");

shareBtn.onmouseover = function () {
    shareBtn.style.cursor = "pointer";
    shareWindowDesktop.style.cursor = "default";
}

shareBtn.addEventListener('click', function (event) {
    // if (this !== event.target) return;
    if (shareWindowDesktop.style.transform === "scale(1)") {
        shareWindowDesktop.style.transform = "scale(0)";
        shareWindowMobile.style.transform = "translateX(100%)";

        shareBtn.style.backgroundColor = "#ECF2F8"
        shareIcon.style.fill = "#6E8098";
    } else {
        shareWindowDesktop.style.transform = "scale(1)";
        shareWindowMobile.style.transform = "translate(0)";

        shareBtn.style.backgroundColor = "#6E8098"
        shareIcon.style.fill = "white";
    }
});