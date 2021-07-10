const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const h1 = document.querySelector("h1");

const USERNAME_KEY = "username";
const HIDEN = "hiden";

function handleSubmit(event) {
    event.preventDefault(); //submit 이벤트가 일어나면 자동적으로 새로고침댐
    loginForm.classList.add(HIDEN); // hiden class를 추가
    const username = loginInput.value; // 유저가 입력한 값을 username에 저장
    localStorage.setItem(USERNAME_KEY, username); // 브라우저를 꺼도 기억할 수 있게 localstorage에 저장, 첫번째 Value 는 key ,  두번째 value는 value 이다.
    greeting(username); //인사하는 함수
}

function greeting(name) {
    h1.innerHTML = `Hello ${name}!`;
    h1.classList.remove(HIDEN); // form을 가려야해
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDEN);
    loginForm.addEventListener("submit", handleSubmit);
} else {
    greeting(savedUsername);
}
