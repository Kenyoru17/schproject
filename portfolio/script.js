function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const githubIcon = document.querySelector(".icon[alt='My Github profile']");
githubIcon.onclick = function() {
  location.href = 'https://github.com/Kenyoru17/schproject';
};
