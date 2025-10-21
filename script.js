let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabname) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab");
}



const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});



// ================== theme ===============

const toggleBtn = document.getElementById("theme-toggle");
// Default: light theme (no need to add class)
toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");

  // Agar ab dark mode on ho gaya, to sun icon dikhao
  if (isDark) {
    toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    toggleBtn.style.color = "white"
    body.style.transition = "0.5s ease";


  } else {
    toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    toggleBtn.style.color = "black"
    body.style.transition = "0.5s ease";

  }
});




