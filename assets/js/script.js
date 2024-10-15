// window.addEventListener('scroll', function() {
//     const heroSection = document.querySelector('.story');
//     const heroPosition = heroSection.getBoundingClientRect().top;
//     const screenPosition = window.innerHeight / 1.3;

//     if (heroPosition < screenPosition && heroPosition + heroSection.offsetHeight > 0) {
//         document.querySelector('.container').classList.add('active');
//     } else {
//         document.querySelector('.container').classList.remove('active');
//     }
// });

//toggle icon navbar
let menuIcon = document.querySelector('.menu');
let navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('menu');
    navbar.classList.toggle('active');
};

// // JavaScript to remove '.html' from URL
// document.addEventListener("DOMContentLoaded", function() {
//     // Get the current URL
//     let currentUrl = window.location.href;

//     // Check if the URL contains '.html'
//     if (currentUrl.includes('.html')) {
//         // Remove '.html' from the URL
//         let newUrl = currentUrl.replace('.html', '');

//         // Redirect to the new URL
//         window.history.replaceState(null, '', newUrl);
//     }
// });
