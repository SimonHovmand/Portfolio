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

    navLinks.forEach(link => link.classList.remove("nav_active"));

    const currentNavLink = document.querySelector(`.nav_li[href="#${currentSectionId}"]`);
    currentNavLink && currentNavLink.classList.add("nav_active");
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