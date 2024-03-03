const btn = document.querySelector(".more-btn");
const album = document.querySelectorAll(".show");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");
const topbar = document.querySelector(".topbar");
const toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");
  main.classList.toggle("active");
  navigation.classList.toggle("active");
};

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
