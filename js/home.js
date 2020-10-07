// DOM References

const navIconsNode = document.querySelectorAll('.navigation__icon');
const sitesNode = document.querySelectorAll('.site');
const musicBtn = document.querySelector('.navbar__audio');

// Variables

const navIcons = [...navIconsNode];
const sites = [...sitesNode];

// Change job name on home site

function changeJobName() {

    const jobName = document.querySelector('.home__subtitle--job');
    const jobs = ['Piłkarzem', 'Programistą', 'Freelancerem'];
    let i = 1;

    jobName.innerHTML = jobs[0];

    setInterval(() => {
        if (i > 2) {
            i = 0;
        }

        jobName.innerHTML = jobs[i];
        i++;
    }, 4000)
};

setTimeout(() => {
    changeJobName();
}, 2000);

// Remove active style of old icon

function changeOldIcon() {

    const oldIcon = navIcons.find(icon => icon.classList.contains('navigation__icon--active'));

    oldIcon.classList.remove('navigation__icon--active');
}

// Remove site from window and hideSite animation

function moveOutSite() {

    const oldSite = sites.find(site => site.classList.contains('active-site'));

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

// Switch site main function

function switchSite() {

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

    const ifOldSite = moveOutSite();

    if (iconId != 'home') moveInSite(iconId, ifOldSite);
    else setTimeout(() => { navIcons.forEach(icon => icon.style.pointerEvents = 'auto'); }, 1000)
}

// Click icon efect

navIcons.forEach((icon) => {
    icon.addEventListener('click', switchSite);
});

// Turn on music

musicBtn.addEventListener('click', () => {

    const music = new Audio('../music/music.mp3');

    console.log(music)

    if (musicBtn.classList.contains('fa-stop')) {

        music.pause();
        music.currentTime = 0.0;

        musicBtn.classList.remove('fa-stop');
        musicBtn.classList.add('fa-volume-up');
        console.log('pause')

    }
    else if (musicBtn.classList.contains('fa-volume-up')) {

        music.play();

        musicBtn.classList.add('fa-stop');
        musicBtn.classList.remove('fa-volume-up');
        console.log('play')

    }

})