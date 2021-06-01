var offset = 0;
var sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
    offset += 320;
    if (offset > 640) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
    offset -= 320;
    if (offset < 0) {
        offset = 640;
    }
    sliderLine.style.left = -offset + "px";
});