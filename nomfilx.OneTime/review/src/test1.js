const video = document.querySelector(".js-video"),
  scroll_class = "scrolled",
  header = document.querySelector(".header"),
  videoPlayBtn = document.querySelector(".js-playBtn"),
  videoMuteBtn = document.querySelector(".js-mutedBtn"),
  videoVolumn = document.querySelector(".js-range");

///이것을 넣었을 때랑 안넣었을 때의 차이
const initVideoBox = () => {
  const muted = localStorage.getItem("muted");
  if (muted === "true") {
    video.muted = false;
    videoMuteBtn.innerHTML = "🔇";
  } else {
    video.muted = true;
    videoMuteBtn.innerHTML = "🔊";
  }
};
////

const handlerScroll = () => {
  if (scrollY > 300) {
    header.classList.add(scroll_class);
    video.pause();
  } else {
    header.classList.remove(scroll_class);
    video.play();
  }
};

const handlerVideoPlay = () => {
  if (video.paused) {
    video.play();
    videoPlayBtn.innerHTML = "⏸";
  } else {
    video.pause();
    videoPlayBtn.innerHTML = "▶";
  }
};

const handlerMuted = () => {
  if (video.muted) {
    video.muted = false;
    localStorage.setItem("muted", "false");
    videoMuteBtn.innerHTML = "🔇";
  } else {
    video.muted = true;
    localStorage.setItem("muted", "true");
    videoMuteBtn.innerHTML = "🔊";
  }
};

initVideoBox();

const handlerVolumn = event => {
  const {
    target: { value }
  } = event;
  video.volume = value;
};

window.addEventListener("scroll", handlerScroll);
videoPlayBtn.addEventListener("click", handlerVideoPlay);
videoMuteBtn.addEventListener("click", handlerMuted);
videoVolumn.addEventListener("change", handlerVolumn);
