// Skills Buttons

// add event listener to each button

// in the event listener:
    // make the icon dissapear
    // make the title appear
    // after 5 seconds:
        // reverse everything

// HTML

// HTML BUTTON
let html_skill = document.getElementById('html_skill');
// HTML LOGO
let html_logo = document.getElementById('html');
// HTML DESCRIPTION
let html_descrip = document.getElementById('html_description');
// HTML EVENT LISTENER
html_skill.addEventListener('click', function () {
    console.log("HTML Button");
    // make the logo dissapear
    html_logo.classList.add('dissapear');
    // add the inner HTML
    html_descrip.classList.add('show');
    // console.log(html_descrip);
    // Set the function for back on 
    function html_back_on() {
        html_logo.classList.remove('dissapear');
        html_descrip.classList.remove('show');
    };
    setTimeout(html_back_on, 3000);
});


// CSS

// CSS BUTTON
let css_skill = document.getElementById('css_skill');
// CSS LOGO
let css_logo = document.getElementById('css');
// CSS DESCRIPTION
let css_descrip = document.getElementById('css_description');
// CSS EVENT LISTENER
css_skill.addEventListener('click', function () {
    console.log("CSS Button");
    // make the logo dissapear
    css_logo.classList.add('dissapear');
    // make the description appear
    css_descrip.classList.add('show');
    // function to reset the button
    function css_back_on() {
        css_logo.classList.remove('dissapear');
        css_descrip.classList.remove('show');
    };
    // call the function with a setTimeout for 3 seconds
    setTimeout(css_back_on, 3000);
});

// SASS

// SASS BUTTON
let sass_skill = document.getElementById('sass_skill');
// SASS LOGO
let sass_logo = document.getElementById('sass');
// SASS DESCRIPTION
let sass_descrip = document.getElementById('sass_description');
// SASS EVENT LISTENER
sass_skill.addEventListener('click', function () {
    console.log("SASS Button");
    // make the logo dissapear
    sass_logo.classList.add('dissapear');
    // make description appear
    sass_descrip.classList.add('show');
    // function to reset the button
    function sass_back_on() {
        sass_logo.classList.remove('dissapear');
        sass_descrip.classList.remove('show');
    };
    // call the function with a setTimeout for 3 seconds
    setTimeout(sass_back_on, 3000);
});

// REACT 

// REACT BUTTON
let react_skill = document.getElementById('react_skill');
// REACT LOGO
let react_logo = document.getElementById('react');
// REACT DESCRIPTION
let react_descrip = document.getElementById('react_description');
// REACT EVENT LISTENER
react_skill.addEventListener('click', function () {
    console.log("REACT Button");
    // make the logo dissapear
    react_logo.classList.add('dissapear');
    // make description appear
    react_descrip.classList.add('show');
    // function to reset the button
    function react_back_on() {
        react_logo.classList.remove('dissapear');
        react_descrip.classList.remove('show');
    };
    // call the function with a setTimeout for 3 seconds
    setTimeout(react_back_on, 3000);
});

// REACT NATIVE

// REACT NATIVE BUTTON
let react_native_skill = document.getElementById('react_native_skill');
// REACT NATIVE LOGO
let react_native_logo = document.getElementById('react_native');
// REACT NATIVE DESCRIPTION
let react_native_descrip = document.getElementById('react_native_description');
// REACT NATIVE EVENT LISTENER
react_native_skill.addEventListener('click', function () {
    console.log("REACT NATIVE Button");
    // make the logo dissapear
    react_native_logo.classList.add('dissapear');
    // make description appear
    react_native_descrip.classList.add('show');
    // function to reset the button
    function react_native_back_on() {
        react_native_logo.classList.remove('dissapear');
        react_native_descrip.classList.remove('show');
    };
    // call the function with a setTimeout for 3 seconds
    setTimeout(react_native_back_on, 3000);
});

// FIGMA

// FIGMA BUTTON
let figma_skill = document.getElementById('figma_skill');
// FIGMA LOGO
let figma_logo = document.getElementById('figma');
// FIGMA DESCRIPTION
let figma_description = document.getElementById('figma_description');
// FIGMA EVENT LISTENER
figma_skill.addEventListener('click', function () {
    // Test Print
    console.log("Figma Button");
    // Make the Logo Dissapear
    figma_logo.classList.add('dissapear');
    // Make the description appear
    figma_description.classList.add('show');
    // function to reset the button
    function figma_back_on () {
        figma_logo.classList.remove('dissapear');
        figma_description.classList.remove('show');
    };
    // call the function with a setTimeout for 3 seconds
    setTimeout(figma_back_on, 3000);
});



// JAVASCRIPT
let javascript_skill = document.getElementById('javascript_skill');
// JAVASCRIPT LOGO
let javascript_logo = document.getElementById('javascript');
// JAVASCRIPT DESCRIPTION
let javascript_description = document.getElementById('javascript_description');
// JAVASCRIPT EVENT LISTENER
javascript_skill.addEventListener('click', function () {
    console.log("JAVASCRIPT Button");
    // Make logo dissapear
    javascript_logo.classList.add('dissapear');
    // Make text appear
    javascript_description.classList.add('show');
    // function to reset the js skill button
    function javascript_back_on() {
        javascript_logo.classList.remove('dissapear');
        javascript_description.classList.remove('show');
    }
    // call the function with a setTimeout for 3 seconds
    setTimeout(javascript_back_on, 3000);
});

// PYTHON
// PYTHON BUTTON
let python_skill = document.getElementById('python_skill');
// PYTHON LOGO
let python_logo = document.getElementById('python');
// PYTHON DESCRIPTION
let python_description = document.getElementById('python_description');
// PYTHON EVENT LISTENER
python_skill.addEventListener('click', function () {
    console.log("PYTHON Button");
    // Make logo dissapear
    python_logo.classList.add('dissapear');
    // Make text appear
    python_description.classList.add('show');
    // function to reset the py skill button
    function python_back_on() {
        python_logo.classList.remove('dissapear');
        python_description.classList.remove('show');
    }
    // setTimer for call of function
    setTimeout(python_back_on, 3000);
});
// NODE JS

// NODE JS BUTTON
let expressjs_skill = document.getElementById('expressjs_skill');
// NODE JS LOGO
let expressjs_logo = document.getElementById('expressjs');
// NODE DESCRIPTION
let expressjs_description = document.getElementById('expressjs_description');
// NODE JS EVENT LISTENER
expressjs_skill.addEventListener('click', function() {
    console.log("NODE JS Button");
    // Make logo dissapear
    expressjs_logo.classList.add('dissapear');
    // Make text appear
    expressjs_description.classList.add('show');
    // function to reset the button
    function expressjs_back_on() {
        expressjs_logo.classList.remove('dissapear');
        expressjs_description.classList.remove('show');
    }
    // setTimer for call of function
    setTimeout(expressjs_back_on, 3000);
});

// DJANGO

// DJANGO BUTTON
let django_skill = document.getElementById('django_skill');
// DJANGO LOGO
let django_logo = document.getElementById('django');
// DJANGO DESCRIPTION
let django_description = document.getElementById('django_description');
// DJANGO EVENT LISTENER
django_skill.addEventListener('click', () => {
    console.log("DJANGO Button");
    // Make logo dissapear
    django_logo.classList.add('dissapear');
    // Make text appear
    django_description.classList.add('show');
    // function to reset the button
    function django_back_on() {
        django_logo.classList.remove('dissapear');
        django_description.classList.remove('show');
    }
    // setTimer for call of function
    setTimeout(django_back_on, 3000);
});

// AWS

// AWS BUTTON
let aws_skill = document.getElementById('aws_skill');
// AWS LOGO
let aws_logo = document.getElementById('aws');
// AWS TEXT
let aws_description = document.getElementById('aws_description');
// AWS EVENT LISTENER
aws_skill.addEventListener('click', () => {
    console.log("AWS Button");
    // Make logo dissapear
    aws_logo.classList.add('dissapear');
    // Make text appear
    aws_description.classList.add('show');
    // function to reset the button
    function aws_back_on() {
        aws_logo.classList.remove('dissapear');
        aws_description.classList.remove('show');
    }
    // setTimer for call of function
    setTimeout(aws_back_on, 3000);
});

// HEROKU

// HEROKU BUTTON
let heroku_skill = document.getElementById('heroku_skill');
// HEROKU LOGO
let heroku_logo = document.getElementById('heroku');
// HEROKU TEXT
let heroku_description = document.getElementById('heroku_description');
// HEROKU EVENT LISTENER
heroku_skill.addEventListener('click', () => {
    console.log("HEROKU Button");
    // Make logo dissapear
    heroku_logo.classList.add('dissapear');
    // Make text appear
    heroku_description.classList.add('show');
    function heroku_back_on() {
        // function to reset the button
        heroku_logo.classList.remove('dissapear');
        heroku_description.classList.remove('show');
    }
    // setTimer for call of function
    setTimeout(heroku_back_on, 3000);
});
