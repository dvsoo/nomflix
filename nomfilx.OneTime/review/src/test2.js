const todolist = document.querySelector(".todolist");

todolist.innerHTML = `
<h2>ToDOList</h2>
<form class='js-form'>
<input type='text' placeholder='Write your todolist'/>
<input type='submit' value='Add TodoList'/>
</form>
<div class='uncomplete'>
    <h3>Uncomplete List</h3>
    <ul class="unList"></ul>
</div>
<div class='complete'>
    <h3>Complete List</h3>
    <ul class="list"></ul>
</div>
`;

const form = document.querySelector(".js-form"),
  todoText = document.querySelector(".js-form input[type=text]"),
  unList = document.querySelector(".unList"),
  completeList = document.querySelector(".list");

const js_deleteTodo = event => {
  const button = event.target;
  const unListChild = button.parentElement;
  const parentList = unListChild.parentElement;
  console.log("adf");
  console.log(unListChild);
};

const js_editTodo = event => {};

const addEvents = unListChild => {
  const js_delete = unListChild.querySelector(".deleteBtn");

  js_delete.onclick = js_deleteTodo();
};

const addTodoList = getTodo => {
  /////li Add
  const unListChild = document.createElement("li");
  const todoElement = document.createElement("label");
  todoElement.innerHTML = getTodo; ////appendChild는 tag만 불러올 수 있다. 텍스트는 innerHTML
  unList.appendChild(unListChild);
  unListChild.prepend(todoElement);

  /////Edit Input
  const listEditInput = document.createElement("input");
  listEditInput.type = "text";
  unListChild.appendChild(listEditInput);

  ////Delete Buttun
  const listDeleteBtn = document.createElement("button");
  listDeleteBtn.innerHTML = "❌";
  listDeleteBtn.classList.add("deleteBtn");
  unListChild.appendChild(listDeleteBtn);

  ////Edit Buttun
  const listEditBtn = document.createElement("button");
  listEditBtn.innerHTML = "✏️";
  listEditBtn.classList.add("editBtn");
  unListChild.appendChild(listEditBtn);

  /////Checkbox Buttun
  const listCheckBox = document.createElement("input");
  listCheckBox.type = "checkbox";
  listCheckBox.classList.add("checkBox");
  unListChild.prepend(listCheckBox);

  ////event add
  addEvents(unListChild);
};

const handlerSubmit = event => {
  event.preventDefault();
  const todo = todoText.value;
  addTodoList(todo);
  todoText.value = "";
};

form.addEventListener("submit", handlerSubmit);
