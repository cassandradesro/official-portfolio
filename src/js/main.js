console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)


document.querySelector(".hamburger").addEventListener("click", function(){
	document.querySelector("nav").classList.toggle("active");
})