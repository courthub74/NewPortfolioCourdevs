// PSUEDO CODE

// Query the Nav Bar

// Upon scroll DOWN set opacity to zero
// just toggle the class
// in css give the extra class that sets it to zero


// Upon scroll UP set opacity to one
// just toggle the class
// in css give the extra class that sets it to one

// query the nav bar
let navbar = document.querySelector('.the_nav');

// query the top-nav
let top_navbar = document.querySelector('.the_top_nav');
// query the top logo
let top_logo = document.getElementById('courdevs_top_logo');
// query the menu burger
let menu_burger = document.getElementById('top_hamburger');
// query the job description
let job_description = document.querySelector('.you');
// on home screen make it dissapear
// on up scroll make it appear

// set a last scroll
let lastScroll = 0;

// FIRST start to be currentScroll = 0;

window.addEventListener('scroll', function () {
    // set a current scroll
    let currentScroll = window.scrollY; 
    // compare current scroll to last scroll
        // then compare to greater than zero
        // SO if it's anywhere below the top
    if (currentScroll - lastScroll > 0) {
        // Navbar background
        top_navbar.classList.add('dissapear');
        // Navbar Logo
        top_logo.classList.add('dissapear');
        // Menu Burger
        menu_burger.classList.add('dissapear');
        // Job Description
        // job_description.classList.add('appear');
        console.log("You are Scrolling Down");
        // START THE timeounav interval again
    } else {
        // scrolled up -- navbar show
        top_navbar.classList.remove('dissapear');
        menu_burger.classList.remove('dissapear');
        job_description.classList.add('appear');
        // top_logo.classList.remove('dissapear');
        // Time the Navbar to dissapear again after
            // 5 Seconds
       
        // also change the .you class
            // make it appear
        // This is at top of the page
        if (currentScroll === 0) {
            job_description.classList.remove('appear');
            top_logo.classList.remove('dissapear');
        }
    } 
    // So you are incrementing each scroll
    lastScroll = currentScroll;
});

// ADD another window event listener to set opacity
    // back to zero when scroll is equal to zero 


// Use Intersection Observer to make the floating navbar job description dissapear at
    // when the home page job description appears of the screen

