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

const addEvents = () => {};

const addTodoList = getTodo => {
  const unListChild = document.createElement("li"),
    listDeleteBtn = document.createElement("button");

  listDeleteBtn.innerHTML = "❌";
  unListChild.innerHTML = getTodo; ////appendChild는 tag만 불러올 수 있다. 텍스트는 innerHTML

  listDeleteBtn.classList.add("deleteBtn");
  ////이 걸 위에서 잡아버리면 null이 생긴다. why? 처음 읽었을 때는 존재하지 않는 클래스 명이기 때문에

  unListChild.appendChild(listDeleteBtn);
  unList.appendChild(unListChild);

  const deleteBtn = document.querySelector(".deleteBtn");
  console.log(deleteBtn);
};

const handlerSubmit = event => {
  event.preventDefault();
  const todo = todoText.value;
  addTodoList(todo);
  todoText.value = "";
};

form.addEventListener("submit", handlerSubmit);
