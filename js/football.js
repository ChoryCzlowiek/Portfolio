window.addEventListener('scroll', () => {
    const careerBoxes = document.querySelectorAll('.football__career-box');
    const footballSite = document.querySelector('.football');
    const scrollYHeight = window.pageYOffset;

    careerBoxes.forEach((box) => {
        if ((box.offsetTop - 400) <= scrollYHeight && footballSite.style.display == 'block') {
            box.style.transform = 'translateX(0)';
        }
    })
})