const socket = io("http://localhost:4000"),
  form = document.querySelector("form"),
  input = form.querySelector("input"),
  messages = document.querySelector("ul");

const addMessage = (text, mine) => {
  const message = document.createElement("li");
  message.innerHTML = text;
  message.classList.add(mine ? "mine" : "yours");
  messages.appendChild(message);
};

const handleSubmit = event => {
  event.preventDefault();
  //console.log(input.value);
  const message = input.value;
  socket.emit("new message sent", {
    message: message
  });
  input.value = "";
  addMessage(message, true);
};

socket.on("notification", data => {
  const { message } = data;
  addMessage(message, false);
});

// setInterval(() => socket.emit("fuck"), 1000);

// socket.on("pong", () => {
//   console.log("pong");
// });

form.addEventListener("submit", handleSubmit);
