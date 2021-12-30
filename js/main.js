// Check If Local Storge have Color Option
let mainColor = localStorage.getItem("color_option")

if (mainColor != null) {
    document.documentElement.style.setProperty("--main-color", mainColor)

}
// Switch Main Color 

let itemColor = document.querySelectorAll(".color-item");
itemColor.forEach(div => {
    div.addEventListener("click", (e) => {

        // set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

        //set color on local storge
        localStorage.setItem("color_option", e.target.dataset.color)

        // remove class active from all children 
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        })
        // add class active on target
        e.target.classList.add("active")
    })

})

// Switch random Bg option 
let backgroundOption = true;
let backgroundIntrval;
let bgLm = document.querySelectorAll(".random-background span");
bgLm.forEach(span => {
    span.addEventListener("click", (e) => {


        // remove class active from all span
        e.target.parentElement.querySelectorAll(".active").forEach(span => {
            span.classList.remove("active")
        })
        // add class active on target
        e.target.classList.add("active")

        if (e.target.dataset.background === "yes") {
            backgroundOption = true
            changeBackground();
        }
        else {
            backgroundOption = true
            clearInterval(backgroundIntrval)
        }
    })

})
//show and hide bullet option
bulletBtn = document.querySelectorAll('.bullets span')
bulletNav = document.querySelector('.nav-bullets')
bulletBtn.forEach(span => {
    span.addEventListener("click", (e) => {

        // remove class active from all span
        e.target.parentElement.querySelectorAll(".active").forEach(span => {
            span.classList.remove("active")
        })
        // add class active on target
        e.target.classList.add("active")


        if (span.dataset.bullet === "show") {
            bulletNav.style.display = 'block';
        }
        else {
            bulletNav.style.display = 'none';

        }
    })

})
//reset page and reload
var resetBtn = document.querySelector('.reset span');
function reset() {
    localStorage.clear();
    window.location.reload();
}
resetBtn.addEventListener('click', reset)

//  start show and hide setting box 
cogsIcon = document.querySelector(".setting-icon");
settingBox = document.querySelector(".setting-box");

function displaySettingBox() {
    cogsIcon.classList.toggle("fa-spin");
    settingBox.classList.toggle("open");
}
document.querySelector(".counte").addEventListener("click", displaySettingBox);
//  end show and hide setting box 

// Select first Page//

let firstPage = document.querySelector(".first-page");

// Select imgs//
let ArrayImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

// Change Imgs BackGround 

function changeBackground() {
    if (backgroundOption === true) {
        backgroundIntrval = setInterval(() => {
            randomNum = Math.floor(Math.random() * ArrayImgs.length)
            firstPage.style.backgroundImage = `url("imgs/${ArrayImgs[randomNum]} ")`
        }, 5000);
    }
}
changeBackground();


// popup Setting to Show and hide img container
var imgs = Array.from(document.getElementsByClassName("w-100"))
var close = document.getElementById("close")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var boxInner = document.querySelector(".boxInner");
var currentIndex = 0;

// loop on img and get img src
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {

        boxConatiner.style.display = "flex";
        var imgSrc = e.target.src;
        boxInner.style.backgroundImage = `url(${imgSrc})`;
        currentIndex = imgs.indexOf(e.target)
    })
}
// hide img box
close.addEventListener("click", closeSlider)

function closeSlider() {


    boxConatiner.style.display = "none"

}

// go to next img 
next.addEventListener("click", getNext)

function getNext() {

    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0
    }

    var imgSrc = imgs[currentIndex].src;
    boxInner.style.backgroundImage = `url(${imgSrc})`;

}

// go to prev img 

prev.addEventListener("click", getPrev)
function getPrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1
    }
    var imgSrc = imgs[currentIndex].src;
    boxInner.style.backgroundImage = `url(${imgSrc})`;
}

// call fun by keyup

document.addEventListener("keyup", function (e) {

    if (e.key == "Escape") {

        closeSlider()
    }
    else if (e.key == "ArrowRight") {

        getNext()
    }
    else if (e.key == "ArrowLeft") {

        getPrev()
    }

})

// scroll smooth to all secs
var allBullets = document.querySelectorAll('.bullet')
var alllinks = document.querySelectorAll('.links a')

function scrollToSections(elements) {
    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {
            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })

        })
    })
}
scrollToSections(allBullets);
scrollToSections(alllinks);

// toggel menu 
let toggelbtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");



toggelbtn.onclick = function () {
    this.classList.toggle("menu-active")
    tLinks.classList.toggle("open")

} 
