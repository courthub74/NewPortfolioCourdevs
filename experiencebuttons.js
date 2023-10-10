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
    console.log("You've pressed the App#1 Button");
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