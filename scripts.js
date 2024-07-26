document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
});

document.getElementById("home").addEventListener("click",function(){
    window.location.href="home.html";
    // document.getElementById("home").classList.add('mode');
});
