//toggle class active humberger menu

const navbarNav = document.querySelector
('.Navbar-nav');

//ketika hamberger menu di klik

document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};



// toggle clas active untuk search-form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {

    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};



//klik diluar sidebar untuk menghilangkan navbar

const hamburger = document.querySelector('#hamburger-menu');

const sb = document.querySelector('#search-button');



document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});
