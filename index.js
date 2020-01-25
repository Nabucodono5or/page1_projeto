let menu = document.querySelector(".menu-hide");
let x = document.querySelector(".left-hide");

function showMenu() {
  menu.setAttribute("style", "width: 30%");
  x.setAttribute("style", "right: 3rem");
  x.setAttribute("style", "padding: 2rem");
}

function hideMenu() {
  menu.setAttribute("style", "width: 0%");
  x.setAttribute("style", "padding: 0");
  x.setAttribute("style", "right: -3rem");
}
