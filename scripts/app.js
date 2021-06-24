// A function that opens the drawer menu

function openSidebar() {
    $('#sidebar, #content').addClass('active');
    $('#overlay').fadeIn(300);
}

// A function that closes the drawer menu

function closeSidebar() {
    $('#sidebar, #content').removeClass('active');
    $('#overlay').fadeOut(300);
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
    smoothScroll();

    // Displaying the current year in the footer

    const currentYear = new Date().getFullYear();
    $('#current-year').text(currentYear);

    // On smaller screens the sidebar will be removed by default and when the sidebar is toggled, a "Close Sidebar" icon will be visible

    const toggleBtn = '<button type="button" class="btn btn-dark my-auto shadow-sm px-4 mb-4" id="sidebar-collapse" onclick="openSidebar()"><i class="fa fa-bars mr-2"></i></button>';
    //ctr
    const closeSidebarDiv = '<div id="close-sidebar"><button type="button" class="close" aria-label="Close" onclick="closeSidebar()"><span aria-hidden="true">&times;</span></button></div>';
	let isToggleBtnAdded = true;
    let isCloseSidebarDivAdded = true;

    $(window).resize(() => {
        const windowWidth = $(window).width();

        if (isToggleBtnAdded && windowWidth > 768) {
            $('#sidebar-collapse').remove();//ctr
            isToggleBtnAdded = false;
        } else if (!isToggleBtnAdded && windowWidth <= 768) {
            $('#page-header').append(toggleBtn);
            isToggleBtnAdded = true;
        }

        if (isCloseSidebarDivAdded && windowWidth > 768) {
            $('#close-sidebar').remove();//ctr
            isCloseSidebarDivAdded = false;
        } else if (!isCloseSidebarDivAdded && windowWidth <= 768) {
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