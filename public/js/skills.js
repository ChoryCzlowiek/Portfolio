// DOM references

const skillsSite = document.querySelector('.skills');
const skillsProgress = document.querySelectorAll('.progress-bar__progress');
const skillsPercents = document.querySelectorAll('.progress-bar__percents');

// Animate progress bar

function animateProgressBar() {

    skillsProgress.forEach(progress => {

        progress.animate([
            { width: '0' },
            { width: `${progress.id}%` }
        ], {
            duration: 1000,
            fill: "both"
        })

    })

}

// Animate percents value

function animatePercentsValue(percents) {

    let counter = 0;

    const percentsValue = setInterval(() => {

        if (counter > percents.id) clearInterval(percentsValue);
        else {
            percents.innerHTML = `${counter}%`;
            counter++
        }

    }, 1000 / percents.id)

}

// Animate percents value and left position

function animatePercents() {

    skillsPercents.forEach(percents => {

        animatePercentsValue(percents);

        percents.animate([
            { left: 0 },
            { left: `${percents.id}%` }
        ], {
            duration: 1000,
            fill: 'both'
        })

    })

}

// Animate skills box

function animateSkillsProgress() {

    if (window.getComputedStyle(skillsSite, null).getPropertyValue("display") == 'block') {

        setTimeout(() => {

            animateProgressBar();
            animatePercents();

        }, 2000)

    }

}

export { animateSkillsProgress };