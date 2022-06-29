window.onload = () => {
    // Display the current year in the footer.

    const currentYear = new Date().getFullYear();
    document.querySelector('#current-year-span').innerHTML = currentYear;

    // Collapse the navbar on smaller screens when a navigation link is clicked.

    const navLinks = document.querySelectorAll('.nav-link');
    for (let navLink of navLinks) {
        navLink.addEventListener('click', () => {
            const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if (width <= 768)                   // 768 is the official MD breakpoint in Bootstrap.
                document.querySelector('.navbar-toggler').click();
        });
    }
};