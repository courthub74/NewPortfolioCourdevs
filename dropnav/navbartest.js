// query the nav bar
let navone = document.querySelector('nav');
// query the text
let textone = document.querySelector('text');

// set the last scroll
let lastScroll = 0;

// write a dissapearing function in setInterval
    // the intervals have to be based on scroll
function out () {
    navone.classList.add('dissapearing');
};

// event listener to the window
window.addEventListener('scroll', function () {
    // set a current scroll
    let currentScroll = window.scrollY;
    // compare current scroll to last scroll
        // then compare to greater than zero
        // SO if it's anywhere below the top
    if (currentScroll - lastScroll > 0) {
        // Navbar background
        navone.classList.add('dissapearing');
        // Text background
        // textone.classList.add('dissapearing');
        // test scroll down
        console.log("You are Scrolling Down");
    } else {
        console.log("You are scrolling Up");
        navone.classList.remove('dissapearing');
        // HERE make it dissapear after 5 seconds
    } 
    if (currentScroll && lastScroll > 0) {
        // Make Nav Bar Appear
        // Then dissapear in 5 seconds
    }
    if (currentScroll == 0) {
        // Make the Nav Bar Appear
        navone.classList.remove('dissapearing');
        // textone.classList.remove('dissapearing');
    }
    // Increments each scroll
    // lastScroll = currentScroll;
    console.log(`The LastScroll: ${lastScroll}`);
    console.log(`The CurrentScroll: ${currentScroll}`);
});