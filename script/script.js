var today = new Date();
var hourNow = today.getHours();
var greeting;
var myName = "Godfrey, hope you're still coding"

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting  + '</h3>' + '<h6>' + myName + '</h6>');