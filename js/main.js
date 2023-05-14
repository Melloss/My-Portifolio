var i = 0;
function hideMenu() {
  var menu = document.querySelector(".navigation");
  if (i % 2 == 0) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
  i++;
}
function jumpTo(id) {
  var section = document.getElementById(id);
  var sectionHeight = section.offsetHeight;
  var middleOfSection = sectionHeight / 2;
  if (window.innerWidth < 992) {
    document.querySelector(".navigation").style.display = "none";
  }
  window.scrollTo(0, section.offsetTop - 100);
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    document.querySelector(".navigation").style.display = "flex";
  }
});
