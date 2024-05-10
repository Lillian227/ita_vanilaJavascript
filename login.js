const inputBox = document.querySelector("#putName");
const button = document.querySelector("#loginBtn");
const loginArea = document.querySelector("#login-area");
const welcomeText = document.querySelector("#welcome-text");
const welcomeArea = document.querySelector("#welcome-area");

const savedName = localStorage.getItem("name");

if(savedName !== "" || savedName !== null) {
  loginArea.style.setProperty("display", "none");
  welcomeText.innerHTML = `Welcome ${savedName}!`;
  welcomeArea.style.setProperty("display", "block");
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  if(inputBox.value.length === 0) {
    alert("저장할 아이디를 입력해주세요.");
  }
  localStorage.setItem("name", inputBox.value);
  
  loginArea.style.setProperty("display", "none");
  welcomeText.innerHTML = `Welcome ${inputBox.value}!`;
  welcomeArea.style.setProperty("display", "block");

});
