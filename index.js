const NavToggle = document.querySelector(".nav-icon");
const links = document.querySelector(".links");
const navbar = document.querySelector(".mobile-navbar");

NavToggle.addEventListener("click", function(){
    if(links.classList.contains("show-links"))
    {
        links.classList.add("show-links");
    }
    else
    {
        links.classList.remove("show-links");
    }
    links.classList.toggle("show-links");
});
links.addEventListener("click",function(){
    navbar.style.display="none";
    navbar.style.background="red";
});
