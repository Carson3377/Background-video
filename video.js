const btn = document.querySelector(".switch-btn");
const videoContainer = document.querySelector(".video-container");

btn.addEventListener("click", function() {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        videoContainer.pause();
    } else {
        btn.classList.remove("slide");
        videoContainer.play();
    };
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
});