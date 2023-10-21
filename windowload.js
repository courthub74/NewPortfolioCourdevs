// Turn on the transitions after page load
// The page is set up with preload
// Then remove it after the page is loaded

// Query the preload class
let preload_window = document.querySelector('body');
// set a last scroll
let lastScrollTrans = 0;

window.addEventListener('scroll', () => {
    // test print
    console.log(preload_window);
    // set a current scroll
    let currentScrollTrans = window.scrollY; 
    // remove the preload class
    preload_window.classList.add('transitions');
});