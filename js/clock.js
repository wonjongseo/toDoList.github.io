const h2 = document.querySelector("h2#clock");

function getTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    h2.innerHTML = `${hour}:${min}:${sec}`;
}

getTime();
setInterval(getTime, 1000);
