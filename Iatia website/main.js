// Changing Navbar Style when Scrolling 
window.addEventListener("scroll", ()=>{
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY > 0)
})

// Showing the answers to the FAQs
const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click", ()=> {
        faq.classList.toggle('open');

        // Changing the icon to (-) when you click on the course
        const icon = document.querySelector('.faq__icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className === "fa-solid fa-minus";
        } else {
            icon.className === "fa-solid fa-plus";
        }
    })
})


// Show/Hide the nav menu
const menu = document.querySelector(".nav__menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener("click", ()=> {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
})

// CLosing the nav__menu
const closeNav = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
}

closebtn.addEventListener('click', closeNav)