import _ from "lodash";
import "./style.css";

///header
const body = document.querySelector("#body");
const header = document.querySelector(".header");
const SCROLLED = "scrolled";

const handleWindowScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    header.classList.add(SCROLLED);
  } else {
    header.classList.remove(SCROLLED);
  }
};

window.addEventListener("scroll", handleWindowScroll);

///VideoBox
const video = document.querySelector(".js-video"),
  button = document.querySelector(".js-button");

const handleVideoClick = () => {
  if (video.paused) {
    video.play();
    button.innerHTML = "paused";
  } else {
    video.pause();
    button.innerHTML = "play";
  }
};

///volumn

video.addEventListener("click", handleVideoClick);
