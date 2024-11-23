// Optional JS to handle specific actions (for now, this is not necessary for download functionality)
document.querySelector('.download-btn').addEventListener('click', function() {
    console.log('Download button clicked!');
});


var sidenav = document.querySelector(".side-navbar");
var navbarToggle = document.querySelector(".navbar-menu-toggle");

function shownavbar() {
    sidenav.style.left = "0";
}

function closenavbar() {
    sidenav.style.left = "-60%";
}

// Add event listeners to ensure toggle functionality works across all pages
if (navbarToggle) {
    navbarToggle.addEventListener("click", shownavbar);
}

var closeButton = document.querySelector(".side-navbar p"); // Assuming the close icon is a <p> element
if (closeButton) {
    closeButton.addEventListener("click", closenavbar);
}


