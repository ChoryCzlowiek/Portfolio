// DOM References

const projectsNode = document.querySelectorAll('.project');

// leave mouse from circle

function mouseLeaveProject() {
    const siteImg = document.querySelector(`.project__img--${this.id}`);
    const playIcon = document.querySelector(`.project__icon--${this.id}`);
    const gitIcon = document.querySelector(`.project__icon--github.project__icon--${this.id}`)
    const circle = document.querySelector(`.project__circle--${this.id}`)

    siteImg.style.filter = 'grayscale(100%)';
    playIcon.style.transform = 'scale(0)';
    gitIcon.style.transform = 'scale(0)';
    circle.style.transform = 'scale(1)';
    circle.style.opacity = '1';
}

// hover effect on circle

function projectHover() {
    const siteImg = document.querySelector(`.project__img--${this.id}`);
    const playIcon = document.querySelector(`.project__icon--${this.id}`);
    const gitIcon = document.querySelector(`.project__icon--github.project__icon--${this.id}`);
    const circle = document.querySelector(`.project__circle--${this.id}`)

    siteImg.style.filter = 'grayscale(0)';
    playIcon.style.transform = 'scale(1)';
    gitIcon.style.transform = 'scale(1)';
    circle.style.transform = 'scale(15)';
    circle.style.opacity = '.6';
}

function projectsHoverFunctions() {

    projectsNode.forEach(project => project.addEventListener('mouseover', projectHover));
    projectsNode.forEach(project => project.addEventListener('mouseleave', mouseLeaveProject));

};

export { projectsHoverFunctions };