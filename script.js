const navTop = document.querySelectorAll(".secondarybar_item");
const navbottom = document.querySelector(".primarybar_style");
const primaryBar = document.querySelector(".primarybar");
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
  secodaryNavBar.append(navbottom);
  secodaryNavBar.style.top = "0px";
} else {
  primaryBar.append(navbottom);
}
window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    secodaryNavBar.style.top = "0";
    secodaryNavBar.append(navbottom);
  } else if (windowWidth > 768 && prevScrollpos > 54) {
    // secodaryNavBar.style.top = "0";
    primaryBar.append(navbottom);
  } else {
    secodaryNavBar.style.top = "";
    primaryBar.append(navbottom);
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
    let test = 54 - currentScrollPos;
    secodaryNavBar.style.top = `${test}px`;
  } else {
    secodaryNavBar.style.top = "-100%";
    if (navbottom.classList.contains("active")) {
      navbottom.classList.remove("active");
      navTop.forEach((element) => {
        element.classList.remove("active");
      });
    }
  }
  prevScrollpos = currentScrollPos;
}
