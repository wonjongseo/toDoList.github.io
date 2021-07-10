const bgImage = document.createElement("img");

const randomNumber = Math.floor(Math.random() * 22);

bgImage.src = `img/${randomNumber}.jpeg`;
bgImage.style.width = 100;
bgImage.style.height = 100;
document.body.appendChild(bgImage);
