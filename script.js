'use strict';

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        body = document.body;

    toggle.addEventListener('click', () => {
        // Toggle show-menu & show-icon class on nav menu
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');

        // Toggle no-scroll class on body based on the presence of show-menu class
        body.classList.toggle('no-scroll', nav.classList.contains('show-menu'));

        if (nav.classList.contains('show-menu')) {
            const menu = document.querySelector(".show-menu");
            if (scrollY > 30) {
                menu.style.top = "70px";
            } else {
                menu.style.top = "var(--header-height)";
            }
        }
    });
}

showMenu('nav-toggle', 'nav-menu');

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav_li');
    const navMenu = document.getElementById('nav-menu');
    const navMobil = document.getElementById('nav-toggle');
    const body = document.body;

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove show-menu, no-scroll and show-icon classes from the navigation menu
            navMenu.classList.remove('show-menu');
            body.classList.remove('no-scroll');
            navMobil.classList.remove('show-icon');
        });
    });
});


// SCROLL CHANGE NAVBAR HEIGHT AND LOCATION NAVBAR LINKS
window.onscroll = function () {
    scrollFunction();
    highlightActiveLink();
};

const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;


function scrollFunction() {
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const img = document.querySelector(".logo");

    // Select all dropdown_menu elements
    const dropMenus = document.querySelectorAll(".dropdown_menu");

    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const isScrolled = scrollTop > 50 ;
    const headerHeight = isScrolled ? "calc(var(--header-height) / 2)" : "var(--header-height)";
    const imgHeight = isScrolled ? "45px" : "90px";
    const imgWidth = isScrolled ? "45px" : "90px";

    // Loop through each dropdown_menu element and set its top style
    dropMenus.forEach((drop) => {
        const dropTop = isScrolled ? "calc(var(--header-height) / 2)" : "var(--header-height)";
        drop.style.top = dropTop;
    });

    header.style.height = headerHeight;
    nav.style.height = headerHeight;
    img.style.height = imgHeight;
    img.style.width = imgWidth;

}

function highlightActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav_li");

    let currentSectionId = null;

    sections.forEach(section => {
        const sectionId = section.id;
        const sectionOffset = section.offsetTop - 120;

        if (window.scrollY > sectionOffset) {
            currentSectionId = sectionId;
        }
    });

    navLinks.forEach(link => link.classList.remove("active"));

    const currentNavLink = document.querySelector(`.nav_li[href="#${currentSectionId}"]`);
    currentNavLink && currentNavLink.classList.add("active");
}

document.querySelectorAll('.nav_li,  .footer-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href'); // Get the target section id
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offset = targetSection.offsetTop - (scrollTop > 30 ? 70 : 90);

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});


// Testim script
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 8000,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    })

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;
        touchPosDiff = touchStartPos - touchEndPos;
        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }

    })
}

// Set color theme
const setTheme = theme => document.documentElement.className = theme;


// Skills, per handler
document.addEventListener('DOMContentLoaded', function () {
    var skillBars = document.querySelectorAll('.skill-per');
    skillBars.forEach(function (bar) {
        var percentage = bar.getAttribute('per');
        bar.style.maxWidth = percentage;
    });
});
