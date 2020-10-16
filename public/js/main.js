// Import JS files

import { showFootballBoxes } from './football.js';
import { animateSkillsProgress } from './skills.js';
import { projectsHoverFunctions } from './projects.js'

// DOM References

const navIconsNode = document.querySelectorAll('.navigation__icon');
const sitesNode = document.querySelectorAll('.site');
const musicBtn = document.querySelector('.navbar__audio');

// Variables

const navIcons = [...navIconsNode];
const sites = [...sitesNode];
let isTheSameSite = false;
const music = new Audio('../music/music.mp3');

// Remove active style of old icon

function changeOldIcon() {

    const oldIcon = navIcons.find(icon => icon.classList.contains('navigation__icon--active'));

    oldIcon.classList.remove('navigation__icon--active');
}

// Remove site from window and hideSite animation

function moveOutSite(iconId) {

    const oldSite = sites.find(site => site.classList.contains('active-site'));

    if (oldSite && oldSite.classList.contains(iconId)) isTheSameSite = true;
    else isTheSameSite = false;

    if (oldSite) {

        oldSite.style.animation = 'hideSite 1s linear both';
        oldSite.classList.remove('active-site');

        setTimeout(() => {
            oldSite.style.display = 'none';
        }, 1000);

        return true;

    } else return false;

}

// Add site visible and add showSite animation

function moveInSite(iconId, ifOldSite) {

    const activeSite = sites.find(site => site.classList.contains(iconId));
    activeSite.style.display = 'block';
    activeSite.classList.add('active-site');

    if (ifOldSite) {

        activeSite.style.animation = 'showSite 1s linear 1s both';
        setTimeout(() => {
            navIcons.forEach(icon => icon.style.pointerEvents = 'auto');
        }, 2000)

    } else {

        activeSite.style.animation = 'showSite 1s linear both';
        setTimeout(() => {
            navIcons.forEach(icon => icon.style.pointerEvents = 'auto');
        }, 1000)

    }
}

// Main function of the site

function mainFunction() {

    window.scrollTo(0, 0);

    navIcons.forEach(icon => icon.style.pointerEvents = 'none');

    if (this.classList.contains('navigation__icon--active')) {

        this.classList.remove('navigation__icon--active');
        const home = navIcons.find(icon => icon.id = 'home');
        home.classList.add('navigation__icon--active');

    } else {

        changeOldIcon();
        this.classList.add('navigation__icon--active');

    }

    const iconId = this.id;

    const ifOldSite = moveOutSite(iconId);

    if (iconId != 'home' && isTheSameSite == false) moveInSite(iconId, ifOldSite);
    else setTimeout(() => { navIcons.forEach(icon => icon.style.pointerEvents = 'auto') }, 1000)

    showFootballBoxes();
    animateSkillsProgress();
    projectsHoverFunctions();

}

// Click icon efect

navIcons.forEach((icon) => {
    icon.addEventListener('click', mainFunction);
});

// Turn on music

musicBtn.addEventListener('click', () => {

    if (musicBtn.classList.contains('fa-volume-up')) {

        music.pause();
        music.currentTime = 0.0;

        musicBtn.classList.add('fa-volume-mute');
        musicBtn.classList.remove('fa-volume-up');

    } else if (musicBtn.classList.contains('fa-volume-mute')) {

        music.play();

        musicBtn.classList.remove('fa-volume-mute');
        musicBtn.classList.add('fa-volume-up');

    }

})