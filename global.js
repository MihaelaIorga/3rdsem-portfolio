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
