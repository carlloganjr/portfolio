/* 
================================================================
    Title: index.js
    Author: Carl Logan
    Date: 9/6/2022
    Description: JavaScript for the portfolio.
================================================================
*/

const mainContent = document.getElementById('main-content');
const arrow = document.getElementById('down-arrow');

// when the arrow is clicked, the window will scroll to the main-content
arrow.addEventListener('click', () => {
    mainContent.scrollIntoView({behavior: 'smooth'});
});
