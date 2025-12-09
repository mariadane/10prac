const username = document.querySelector("#username");
const bio = document.querySelector("#bio");
const nameInput = document.querySelector("#nameInput");
const changeNameBtn = document.querySelector("#changeNameBtn");
const likesSpan = document.querySelector("#likes");
const likeBtn = document.querySelector("#likeBtn");
const resetBtn = document.querySelector("#resetBtn");
const toggleBioBtn = document.querySelector("#toggleBioBtn");
const hobbiesBlock = document.querySelector("#hobbies");
const toggleHobbiesBtn = document.querySelector("#toggleHobbiesBtn");
const themeToggle = document.querySelector("#themeToggle");
const avatar = document.querySelector("#avatar");
const changePhotoBtn = document.querySelector("#changePhotoBtn");

let likes = 0;
const defaultName = "Самовар";
const defaultAvatar = "images/SamovarMain.png";
let isAltPhoto = false;


changeNameBtn.addEventListener("click", () => {
  const val = nameInput.value.trim();
  if (val === "") {
    alert("Имя не может быть пустым");
    return;
  }
  username.textContent = val;
});


nameInput.addEventListener("input", () => {
  const val = nameInput.value.trim();
  username.textContent = val === "" ? defaultName : val;
});


likeBtn.addEventListener("click", () => {
  likes++;
  likesSpan.textContent = likes;
});


resetBtn.addEventListener("click", () => {
  likes = 0;
  likesSpan.textContent = likes;
  nameInput.value = "";
  username.textContent = defaultName;
  avatar.setAttribute("src", defaultAvatar);
  isAltPhoto = false;
});


toggleBioBtn.addEventListener("click", () => {
  bio.classList.toggle("hidden");
});


toggleHobbiesBtn.addEventListener("click", () => {
  hobbiesBlock.classList.toggle("hidden");
});


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "Тема: Тёмная" : "Тема: Светлая";
});


changePhotoBtn.addEventListener("click", () => {
  if (isAltPhoto) {
    avatar.setAttribute("src", "images/SamovarMain.png");
  } else {
    avatar.setAttribute("src", "images/samovar2.jpg");
  }
  isAltPhoto = !isAltPhoto;
});


document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseover", () => btn.classList.add("hovered"));
  btn.addEventListener("mouseout", () => btn.classList.remove("hovered"));
});
