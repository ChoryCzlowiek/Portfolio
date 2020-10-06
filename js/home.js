// DOM References

const navIconsNode = document.querySelectorAll('.navigation__icon');
const sitesNode = document.querySelectorAll('.site');

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

// Remove old active icon

function removeUnactiveIcon() {
    const indexOfActiveIcon = navIcons.findIndex((icon) => icon.classList.contains('navigation__icon--active'));

    if (indexOfActiveIcon != -1) {
        navIcons[indexOfActiveIcon].classList.remove('navigation__icon--active');
        navIcons[indexOfActiveIcon].style.pointerEvents = 'auto';
    }
}

// Show and hide sites

function toggleSites(iconId) {
    const unactiveSite = sites.find(site => site.classList.contains('active'));

    if (unactiveSite) {
        unactiveSite.style.animation = 'hideSite 1s linear both';
        unactiveSite.classList.remove('active');

        const activeSite = sites.find((site) => site.classList.contains(iconId));

        if (iconId != 'home' || iconId != unactiveSite.id) {
            activeSite.style.display = 'block';
            activeSite.style.animation = 'showSite 1s linear 1s both';
            activeSite.classList.add('active');
        }

        setTimeout(() => {
            unactiveSite.style.animation = '';
            unactiveSite.style.display = 'none';

            navIcons.forEach(icon => icon.style.pointerEvents = 'auto');
        }, 2000)

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1000)
    } else {
        const activeSite = sites.find((site) => site.classList.contains(iconId));

        if (iconId != 'home' || iconId != unactiveSite.id) {
            activeSite.style.display = 'block';
            activeSite.style.animation = 'showSite 1s linear both';
            activeSite.classList.add('active');

            setTimeout(() => {
                navIcons.forEach(icon => icon.style.pointerEvents = 'auto');
            }, 1000)
        }
    }
}

// Switch sites by the nav

function switchSite() {
    removeUnactiveIcon();
    this.classList.add('navigation__icon--active');
    navIcons.forEach(icon => icon.style.pointerEvents = 'none');

    const iconId = this.id;

    toggleSites(iconId);
}

navIcons.forEach((icon) => {
    icon.addEventListener('click', switchSite);
});