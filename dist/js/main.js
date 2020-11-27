// Setting tags as variables
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuNav = document.querySelector(".menu-nav");
var navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

// Menu button
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}

const paths = document.querySelectorAll("#home svg path");

for (i = 0; i < paths.length; i++) {
  let pathLength = paths[i].getTotalLength();
  paths[i].style.strokeDasharray = pathLength;
  paths[i].style.strokeDashoffset = pathLength;
  paths[i].style.animation = "mongo 2s ease forwards 0.3s";
  document.querySelector("#SVG").style.opacity = "1";
}

window.onscroll = () => {
  stickyNav();
  colorNav();
};
//------------------------------------------- Coloring Nav Items---------------------------------
var nav1 = document.querySelector("#nav-1");
var nav2 = document.querySelector("#nav-2");
var nav3 = document.querySelector("#nav-3");
var nav1Of = document.querySelector("#nav-about").offsetTop;
var nav2Of = document.querySelector("#nav-projects").offsetTop;
var nav3Of = document.querySelector("#nav-contact").offsetTop;

  function colorNav(){
    if (window.pageYOffset < nav1Of) {
      nav1.style.color = 'white'; nav2.style.color = 'white'; nav3.style.color = 'white';
    } 
    if (window.pageYOffset >= nav1Of) {
      nav1.style.color = 'rgb(0, 189, 223)'; nav2.style.color = 'white'; nav3.style.color = 'white';
    }
    if(window.pageYOffset >= nav2Of ){
      nav1.style.color = 'white'; nav2.style.color = 'rgb(0, 189, 223)'; nav3.style.color = 'white';
    }
    if(window.pageYOffset >= nav3Of ){
       nav1.style.color = 'white'; nav2.style.color = 'white'; nav3.style.color = 'rgb(0, 189, 223)';

    }
    }
//------------------------------------------- Sticky navigation ---------------------------------
var navLimit = document.getElementById("nav-limit");
var nav = document.getElementById("sticky-wrap");
var wrapCover = document.getElementById("wrap-cover");
var container = document.getElementById("home");
var body = document.querySelector("body");

var sticky = navLimit.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    wrapCover.classList.add("sticky");
    container.style.paddingTop = "75px";
  } else {
    wrapCover.classList.remove("sticky");
    container.style.paddingTop = "0";
  }
}
//------------------------------------------- Menu Auto-close ---------------------------------
setInterval(() => {
  if (body.clientWidth > 1045 && showMenu === true) {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}, 200);
