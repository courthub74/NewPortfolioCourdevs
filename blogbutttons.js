// BLOG BUTTONS

// QUERY WHOLE PAGE TO STOP AND DARKEN
let whole_body_for_blog = document.querySelector('body');

// BLOG #1

// THE BUTTON
let blog_one = document.getElementById('blog_one');
// THE SLIDE IN 
let blog_one_content = document.querySelector('.blog1content');
// THE BACK ARROW
let blog_one_back = document.querySelector('.blog_back_arrow');
// ADD EVENTLISTENER TO BLOG BUTTON
blog_one.addEventListener('click', function() {
    console.log("Blog ONE Button");
    // toggle body to no-scroll
    whole_body_for_blog.classList.add('no_scroll');
    // SLIDE IN THE CONTENT
    blog_one_content.classList.add('slide_in');
});
// ADD EVENTLISTENER TO BACK ARROW
blog_one_back.addEventListener('click', function() {
    console.log("Blog ONE Back Arrow");
    // SLIDE OUT THE CONTENT
    blog_one_content.classList.remove('slide_in');
});