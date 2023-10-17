// Portfolio JS

// Query Apps

// THEN add an event listener to each app button
    // to it make a 'click' event function
    //  to the 'click' event function toggle the css class 
        // to slide the description in from the right
        // also set the body css selector to no-scroll css class
// NEXT ditto the back button to remove all of those classes

// BODY
let whole_body = document.querySelector('body');
// CONTAINER
let whole_container = document.getElementById('whole_page');
// App 1 Button
let app_1 = document.getElementById('app_1');
// App 1 Content
let app_1_content = document.querySelector('.app1content');
// App 1 Back Button
let app_1_back_button = document.querySelector('.app1_back_arrow');
// App 1 Button EventListener
app_1.addEventListener('click', function() {
    console.log("App 1 Button");
    // toggle body to no-scroll
    whole_body.classList.add('no_scroll');
    // console.log(whole_container);
    // toggle app 1 content to slide-in
    app_1_content.classList.add('slide_in');
});
// App 1 Back Button EventListener
app_1_back_button.addEventListener('click', function() {
    console.log("Back Button");
    // toggle body to scroll again
    whole_body.classList.remove('no_scroll');
    // toggle app 1 content to slide off
    app_1_content.classList.remove('slide_in');
});

// App 2
let app_2 = document.getElementById('app_2');
// App 3
let app_3 = document.getElementById('app_3');
// App 4
let app_4 = document.getElementById('app_4');



