import _ from "lodash";
import "./style.css";

///header
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
  button = document.querySelector(".js-button"),
  volumn = document.querySelector(".js-volumn"),
  range = document.querySelector(".js-range");

////why need that?
const initVideo = () => {
  const muted = localStorage.getItem("muted");
  if (muted === "true") {
    video.muted = true;
    volume.innerHTML = "🔇";
  } else {
    video.muted = false;
    volumn.innerHTML = "🔊";
  }
};

const handleVideoClick = () => {
  if (video.paused) {
    video.play();
    button.innerHTML = "⏸";
  } else {
    video.pause();
    button.innerHTML = "▶️";
  }
};

const handleVolumnClick = () => {
  if (video.muted) {
    video.muted = false;
    volumn.innerHTML = "🔊";
  } else {
    video.muted = true;
    volumn.innerHTML = "🔇";
  }
};

initVideo();

const updateVolumn = () => {
  const {
    target: { value }
  } = event;
  video.volume = value;
};
///volumn

button.addEventListener("click", handleVideoClick);
volumn.addEventListener("click", handleVolumnClick);
range.addEventListener("change", updateVolumn);

/////todolist
const todolist = document.querySelector("#todolist");

todolist.innerHTML = `
<h1>To Do LIst</h1>
<form class='js-form'>
  <input type='text' placeholder='Write your To Do List'/>
  <input type='submit' vlaue='Add To Do List'/>
</form>
<h2>Uncompleted List</h2>
<ul class='unList'></ul>
<h2>Completed List</h2>
<ul class='completeList'></ul>
`;

const form = document.querySelector(".js-form"),
  inputText = document.querySelector(".js-form > input[type=text]"),
  unList = document.querySelector(".unList"),
  list = document.querySelector(".completeList");

const deleteTodo = event => {
  const button = event.target;
  const createlist = button.parentElement;
  const parentList = createlist.parentElement;
  parentList.removeChild(parentList);
};

const editTodo = event => {
  const button = event.target;
  const createlist = button.parentElement;
  const editInputBox = document.createElement("input");
  const editOKbtn = document.createElement("button");
  editOKbtn.innerHTML = "ok";
  editInputBox.appendChild(editOKbtn);
  editOKbtn.addClass.add("editokbtn");
  createlist.appendChild(editInputBox);
};

const addEvents = itemlist => {
  console.log(itemlist);
  const deleteBtn = itemlist.querySelector(".js-delete");
  const editBtn = itemlist.querySelector(".js-edit");
  deleteBtn.onclick = deleteTodo;
  editBtn.onclick = editTodo;
};

const createListItem = itemlist => {
  const createlist = document.createElement("li"),
    deleteBtn = document.createElement("button"),
    editBtn = document.createElement("button"),
    checkBtn = document.createElement("input");

  checkBtn.type = "checkbox";
  createlist.appendChild(deleteBtn);
  createlist.appendChild(editBtn);
  deleteBtn.innerHTML = "❌";
  deleteBtn.classList.add("js-delete");
  editBtn.innerHTML = "✏️";
  editBtn.classList.add("js-edit");

  const todoText = document.createElement("label");
  todoText.innerHTML = itemlist;

  createlist.prepend(todoText);
  createlist.prepend(checkBtn);
  unList.prepend(createlist);
  //addEvents(itemlist);
};

const handleFormSubmit = event => {
  event.preventDefault();
  const toDo = inputText.value;
  createListItem(toDo);
  inputText.value = "";
};

form.addEventListener("submit", handleFormSubmit);
