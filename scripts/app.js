// A function that opens the drawer menu

function openSidebar() {
    $('#sidebar, #content').addClass('active');
    $('#overlay').fadeIn(300);
    $('body').css('overflow-y', 'hidden');
}

// A function that closes the drawer menu

function closeSidebar() {
    $('#sidebar, #content').removeClass('active');
    $('#overlay').fadeOut(300);
    $('body').css('overflow-y', 'visible');
}

// Smooth scrolling when clicking on a navigation link

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({ behavior: 'smooth', offsetTop: 20 });
        });
    });
}

$(() => {
    // Enabling smooth scrolling on page links

    smoothScroll();

    // The width where the page's structure will change

    const breakpoint = 768;

    // Displaying the current year in the footer

    const currentYear = new Date().getFullYear();
    $('#current-year').text(currentYear);

    // When a navigation link is clicked on smaller screens, the sidebar will be closed

    if ($(window).width() <= breakpoint)
        $('.nav-link').on('click', () => closeSidebar());

    // On smaller screens the sidebar will be removed by default and when the sidebar is toggled, a "Close Sidebar" icon will be visible

    const toggleBtn = '<button type="button" class="btn btn-dark my-auto shadow-sm px-4 mb-4" id="sidebar-collapse" onclick="openSidebar()"><i class="fa fa-bars mr-2"></i></button>';
    const closeSidebarDiv = '<div id="close-sidebar"><button type="button" class="close" aria-label="Close" onclick="closeSidebar()"><span aria-hidden="true">&times;</span></button></div>';
	let isToggleBtnAdded = true;
    let isCloseSidebarDivAdded = true;

    $(window).resize(() => {
        const windowWidth = $(window).width();

        if (windowWidth < breakpoint)
            $('.nav-link').on('click', () => closeSidebar());

        if (isToggleBtnAdded && windowWidth > breakpoint) {
            $('#sidebar-collapse').remove();
            isToggleBtnAdded = false;
        } else if (!isToggleBtnAdded && windowWidth <= breakpoint) {
            $('#page-header').append(toggleBtn);
            isToggleBtnAdded = true;
        }

        if (isCloseSidebarDivAdded && windowWidth > breakpoint) {
            $('#close-sidebar').remove();
            isCloseSidebarDivAdded = false;
        } else if (!isCloseSidebarDivAdded && windowWidth <= breakpoint) {
            $('#sidebar-header').prepend(closeSidebarDiv);
            isCloseSidebarDivAdded = true;
        }

        // Fixing the sidebar bug during resizing

        if ($('#overlay').is(':visible') && $('#sidebar').hasClass('active')) {
            $('#overlay').fadeOut(300);
            $('#sidebar').removeClass('active');
        }
    });
});