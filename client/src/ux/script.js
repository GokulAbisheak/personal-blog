function navScroll() {
    var nav = document.getElementById("navbar");

    if(window.scrollY > 80) {
        nav.style.backgroundColor = "#FFFFFF";
        nav.style.boxShadow = "0px 0px 10px #808080"
    }
    else {
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none"
    }
}

document.addEventListener("scroll", navScroll);

function aboutNavScroll() {
    var aboutNav = document.getElementById("about-nav");
    var offsets = aboutNav.getBoundingClientRect();
    var top = offsets.top;
    var link = document.getElementById('about').querySelectorAll('.nav-link');
    var len = link.length;
    var i;

    console.log(len)

    if(top === 0) {
        aboutNav.style.backgroundColor = "#3666dd";
        aboutNav.style.boxShadow = "0px 0px 10px #808080";
        for(i=0; i<len; i++) {
            link[i].style.color = "#FFFFFF";
        }
    }
    else {
        aboutNav.style.backgroundColor = "transparent";
        aboutNav.style.boxShadow = "none";
        for(i=0; i<len; i++) {
            link[i].style.color = "blue";
        }
    }
}

document.addEventListener("scroll", aboutNavScroll);