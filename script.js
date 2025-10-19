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



let sideMenu = document.getElementById("sidemenu");

function openMenu() {
  sideMenu.style.right = "0"
}
function closeMenu() {
  sideMenu.style.right = "-200px"
}


const toggleBtn = document.getElementById("theme-toggle");
// Default: light theme (no need to add class)
toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");

  // Agar ab dark mode on ho gaya, to sun icon dikhao
  if (isDark) {
    toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        toggleBtn.style.color = "white"

  } else {
    toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    toggleBtn.style.color = "black"
  }
});



// const toggleButton = document.getElementById('theme-toggle');
// const body = document.body;

// // Shuruaat me light mode lagao
// body.classList.add('light-mode');

// // Click event
// toggleButton.addEventListener('click', () => {
//   if (body.classList.contains('light-mode')) {
//     body.classList.replace('light-mode', 'dark-mode');
//     toggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
//   } else {
//     body.classList.replace('dark-mode', 'light-mode');
//     toggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
//   }
// });
