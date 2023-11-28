const btn = document.querySelector(".more-btn");
const album = document.querySelectorAll(".show");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");
const topbar = document.querySelector(".topbar");
const toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  // toggle.setAttribute(this.classList, "active") = "active"
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");
  main.classList.toggle("active");
  navigation.classList.toggle("active");
};

// if (innerWidth < 450){
// let navMenu = document.querySelector(".navigation");
// navMenu.style.cssText= "position:absolute; right: 0; top: 50px; width: 150px; height: 200px; border: 1px solid rgba(0, 0, 0, 0.05); background: var(--white2)\
// ; display: flex; justify-content: center; align-items: center; overflow: hidden; transition: width 0.5s;z-index: 2000;"}

addEventListener("click", function (e) {
  if (e.target.getAttribute("class") === "more-btn") {
    if (e.target.innerHTML == "See More") {
      album.forEach((element) => {
        element.style.display = "block";
        btn.innerHTML = "See Less";
      });
    } else {
      album.forEach((element) => {
        element.style.display = "none";
        btn.innerHTML = "See More";
      });
    }
  }
});
