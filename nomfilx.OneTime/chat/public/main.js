const socket = io("mongodb://root:sookung55@ds121373.mlab.com:21373/chat"),
  messageForm = document.querySelector(".js-messageForm"),
  messageInput = messageForm.querySelector(".js-messageInput"),
  nicknameForm = document.querySelector(".js-nicknameForm"),
  nicknameInput = nicknameForm.querySelector(".js-nicknameInput"),
  form = document.querySelector("form"),
  input = form.querySelector("input"),
  messages = document.querySelector("ul");

const NICKNAME = "nickname";
let nickName = localStorage.getItem(NICKNAME);

if (nickName) {
  messageForm.style.display = "block";
} else {
  nicknameForm.style.display = "block";
}

const addMessage = (text, mine) => {
  const message = document.createElement("li");
  message.innerHTML = text;
  message.classList.add(mine ? "mine" : "yours");
  messages.appendChild(message);
};

const handleSubmit = event => {
  event.preventDefault();
  //console.log(input.value);
  const message = messageInput.value;
  socket.emit("new message sent", {
    message: message,
    creator: nickName
  });
  messageInput.value = "";
  addMessage(`${nickName}: ${message}`, true);
};

socket.on("notification", data => {
  const { message, creator } = data;
  addMessage(`${creator}: ${message}`, false);
});

const handleNicknameSubmit = event => {
  event.preventDefault();
  const nickNameFormInput = nicknameInput.value;
  localStorage.setItem(NICKNAME, nickNameFormInput);
  nickName = nickNameFormInput;
  nickNameFormInput.value = "";
  nicknameForm.style.display = "none";
  messageForm.style.display = "block";
};

// setInterval(() => socket.emit("fuck"), 1000);

// socket.on("pong", () => {
//   console.log("pong");
// });

const getHistory = () => {
  fetch("/messages")
    .then(response => response.json())
    .then(data => {
      const { messages } = data;
      messages.forEach(message =>
        addMessage(
          `${message.creator}: ${message.message}`,
          message.creator === nickName
        )
      );
    });
};

getHistory();
messageForm.addEventListener("submit", handleSubmit);
nicknameForm.addEventListener("submit", handleNicknameSubmit);
