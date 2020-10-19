const navTop = document.querySelectorAll(".secondarybar_item");
const navbottom = document.querySelector(".primarybar");
const hamMenu = document.querySelector(".secondarybar_hamMenu");
const navBar = document.querySelector(".secondarybar");
var prevScrollpos = window.pageYOffset;

hamMenu.addEventListener("click", openHamMenu);
function openHamMenu() {
  navTop.forEach((element) => {
    element.classList.toggle("active");
  });
  navbottom.classList.toggle("active");
}

window.addEventListener("scroll", showingNavBar);
function showingNavBar() {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);
  if (currentScrollPos < prevScrollpos && currentScrollPos > 54) {
    navBar.style.top = "0";
  } else if (currentScrollPos < 54) {
    navBar.style.top = "54px";
  } else {
    navBar.style.top = "-152px";
  }
  prevScrollpos = currentScrollPos;
}
