const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDOList = document.getElementById("todo-list");

let toDos = []; // 기존 toDOlist 의 내용을 복원하기 위해 Let
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 일반 obejct or array를 string으로 바꿔줌
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    li.remove(li);
    saveToDos();
}

function toDoPaint(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerHTML = newToDo.text;

    const button = document.createElement("button");
    button.innerText = "  X";

    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteToDo);
    toDOList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();

    const newToDoObj = {
        text: toDoInput.value,
        id: Date.now(),
    };
    console.log(newToDoObj.text);
    toDos.push(newToDoObj); //삭제하는 원소를 알기 위해 아이디가 필요하고 그 아이디를 저장히기 위해 오브젝트를 매개변수로 보내줌
    toDoInput.value = "";
    toDoPaint(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 복원
    parsedToDos.forEach(toDoPaint);
}
