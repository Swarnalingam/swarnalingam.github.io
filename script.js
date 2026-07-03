// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
let aboutTab = "Passion";
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

function download(fileName,fileType="pdf") {
  const createAnchorTag = document.createElement("a");
  createAnchorTag.target = "_blank";
  createAnchorTag.href = `./Images/${fileName}.${fileType}`;
  createAnchorTag.download;
  createAnchorTag.click();
}

function swap() {
  const swapButton = document.getElementById("swap-button");
   document.getElementById(aboutTab).style.display = "none";
  if(aboutTab=="Passion")aboutTab = "Work-History";
  else aboutTab = aboutTab=="Education"?"Passion":"Education";
  // if (swapButton.innerText == "Next") {
  //   document.getElementById("Passion").style.display = "none";
  //   document.getElementById("Education").style.display = "block";
  // } else {
  //   document.getElementById("Passion").style.display = "block";
  //   document.getElementById("Education").style.display = "none";
  // }
  // swapButton.innerText = swapButton.innerText == "Next" ? "Prev" : "Next";
  
  document.getElementById(aboutTab).style.display = "block";
  swapButton.innerText = aboutTab=="Education" ? "Prev" : "Next";
}

function onGoLive(url){
  let modalEle=document.getElementById(url);
  modalEle.className=modalEle.className+' show';
}

function onCloseModal(url){
  let modalEle=document.getElementById(url);
  modalEle.className='modal';
}

function onGoProject(url){
  let linkEle=document.createElement('a');
  linkEle.href=url;
  linkEle.click()
  onCloseModal(url);
}
