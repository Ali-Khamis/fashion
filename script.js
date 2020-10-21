const navTop = document.querySelectorAll(".secondarybar_item");
const navbottom = document.querySelector(".primarybar");
const hamMenu = document.querySelector(".secondarybar_hamMenu");
const secodaryNavBar = document.querySelector(".secondarybar");
const navBar = document.querySelector("nav");
const ul = document.querySelector("ul");
let prevScrollpos = window.pageYOffset;
let windowWidth = window.innerWidth;
hamMenu.addEventListener("click", openHamMenu);
function openHamMenu() {
  navTop.forEach((element) => {
    element.classList.toggle("active");
  });
  navbottom.classList.toggle("active");
}
if (windowWidth <= 768) {
  navBar.style.position = "fixed";
  navBar.style.top = "0";
  secodaryNavBar.style.top = "0";
}
window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    navBar.style.position = "fixed";
    navBar.style.top = "0";
    secodaryNavBar.style.top = "0";
  } else {
    navBar.style.position = "";
    navBar.style.top = "";
    secodaryNavBar.style.top = "";
  }
});

window.addEventListener("scroll", showingsecodaryNavBar);
function showingsecodaryNavBar() {
  let currentScrollPos = window.pageYOffset;
  if (
    (currentScrollPos < prevScrollpos && currentScrollPos > 54) ||
    (currentScrollPos < prevScrollpos && windowWidth <= 768)
  ) {
    secodaryNavBar.style.top = "0";
  } else if (currentScrollPos < 54) {
    secodaryNavBar.style.top = "54px";
  } else {
    secodaryNavBar.style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}
