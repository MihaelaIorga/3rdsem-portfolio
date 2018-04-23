function removeActive(link) {
    link.classList.remove('active')
}
document.querySelector(".clickwork").onclick = function (e) {
    document.querySelectorAll('nav a').forEach(removeActive);
    e.target.classList.add('active');
}

document.querySelector(".clickabout").onclick = function (e) {
    document.querySelectorAll('nav a').forEach(removeActive);
    e.target.classList.add('active');
}


document.querySelector(".clickresume").onclick = function (e) {
    document.querySelectorAll('nav a').forEach(removeActive);
    e.target.classList.add('active');
}

document.querySelector(".clickcontact").onclick = function (e) {
    document.querySelectorAll('nav a').forEach(removeActive);
    e.target.classList.add('active');
}


//fade in page


// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
