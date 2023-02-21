let navBar = document.querySelector(".mega-menu");
let click = document.querySelector(".main-nav li:last-child");
// console.log(click);
// navBar.classList.add("show");
click.onclick = function () {
  navBar.classList.toggle("show");
};

new TypeIt("#simpleUsage", {
  strings: "Welcome, To Elcapitano World.",
  speed: 50,
  waitUntilVisible: true,
}).go();
