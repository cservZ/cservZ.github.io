window.onload = () => {
    // Display the current year in the footer.

    const currentYear = new Date().getFullYear();
    document.querySelector('#current-year-span').innerHTML = currentYear;

    // Collapse the navbar on smaller screens when a navigation link or the navigation brand is clicked.

    const closeNavbar = () => {
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const navbar = document.querySelector('#page-navbar');
        const navbarToggler = document.querySelector('.navbar-toggler');

        if (width <= 768 && window.getComputedStyle(navbar).display !== 'none') {
            navbarToggler.click();
        }
    }

    const navBrand = document.querySelector('.navbar-brand');
    navBrand.addEventListener('click', closeNavbar);

    const navLinks = document.querySelectorAll('.nav-link');
    for (let navLink of navLinks) {
        navLink.addEventListener('click', closeNavbar);
    }
};