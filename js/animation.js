document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.getElementById('skills-section');
    const progressBars = document.querySelectorAll('.progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    bar.style.width = bar.classList[1]; // Set width based on class (e.g., .photoshop)
                });
                observer.unobserve(skillsSection); // Stop observing after animation
            }
        });
    });

    observer.observe(skillsSection);
});
