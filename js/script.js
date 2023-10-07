/* -----------------------------
    Pin Name  : Simple Register Form
    File Name : script.js
    Date      : 23 DEC 2017
    Author    : Alaa El sayed
    Idea      : Jens Kreuter
    URL       : (https://www.uplabs.com/posts/simple-register-form-interface)
   -----------------------------*/


// Set the date we're counting down to
var countDownDate = new Date("jan 18, 2024").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Output the result in an element with id="demo"
    document.getElementById("counter").innerHTML = days ;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
    }
}, 1000);