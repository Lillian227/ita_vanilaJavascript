const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const backgroundImg = document.createElement("img");

backgroundImg.src = `img/${chosenImg}`;

document.body.appendChild(backgroundImg);