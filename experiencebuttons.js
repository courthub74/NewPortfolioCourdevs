// Experience Buttons

// COURDEVELOPS

// COURDEVELOPS BUTTON
let courdevs_button = document.getElementById('courdevelops_button');
// COURDEVELOPS MAIN DESCRIPTION
let courdevs_main_description = document.querySelector('.main_description');
// COURDEVELOPS DETAILED DESCRIPTION
let courdevs_detailed_description = document.querySelector('.detailed_description');
// EVENT LISTENER FOR BUTTON
courdevs_button.addEventListener('click', function() {
    // Test Print
    console.log("You've pressed job#1 Button");
    // make the main description dissapear
    courdevs_main_description.classList.add('dissapear');
    // make the detailed description appear
    courdevs_detailed_description.classList.add('show');
    // function to reset it all
    function courdevs_reset() {
        courdevs_main_description.classList.remove('dissapear');
        courdevs_detailed_description.classList.remove('show');
    }
    // call behind a setTimeout
    setTimeout(courdevs_reset, 8000);
});

// R1RCM

// R1RCM BUTTON
let r1rcm_button = document.getElementById('r1rcm_button');
// R1RCM MAIN DESCRIPTION
let r1rcm_main_description = document.querySelector('.main_description_r1rcm');
// R1RCM DETAILED DESCRIPTION
let r1rcm_detailed_description = document.querySelector('.detailed_description_r1rcm');
// EVENT LISTENER FOR BUTTON
r1rcm_button.addEventListener('click', function() {
    // Test Print
    console.log("You've pressed job#2 button");
    // make the main description dissapear
    r1rcm_main_description.classList.add('dissapear');
    // make the detailed description appear
    r1rcm_detailed_description.classList.add('show');
    // function to reset it all
    function r1rcm_reset() {
        r1rcm_main_description.classList.remove('dissapear');
        r1rcm_detailed_description.classList.remove('show');
    }
    // call behind a setTimeout
    setTimeout(r1rcm_reset, 8000);
});

// SLEA

// SLEA BUTTON
let slea_button = document.getElementById('slea_button');
// SLEA MAIN DESCRIPTION
let slea_main_description = document.querySelector('.main_description_slea');
// SLEA DETAILED DESCRIPTION
let slea_detailed_description = document.querySelector('.detailed_description_slea');
// EVENT LISTENER FOR BUTTON
slea_button.addEventListener('click', function() {
    // Test Print
    console.log("You've pressed job#3 button");
    // make the main description dissapear
    slea_main_description.classList.add('dissapear');
    // make the detailed description appear
    slea_detailed_description.classList.add('show');
    // function to reset it all
    function slea_reset() {
        slea_main_description.classList.remove('dissapear');
        slea_detailed_description.classList.remove('show');
    }
    // call behind a setTimeout
    setTimeout(slea_reset, 8000);
});