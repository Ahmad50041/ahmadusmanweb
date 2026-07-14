console.log("Welcome to Ahmad Usman's Portfolio Website!");

console.log("Portfolio Website Loaded Successfully!");

const form = document.getElementById("contactForm");

if(form){
form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});
}

