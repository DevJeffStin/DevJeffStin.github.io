const menuBtn = document.querySelector(".menu_button");
const menuItems = document.querySelector(".menu__items");
const expandBtn = document.querySelectorAll(".expand-btn");

// nav toggle
menuBtn.addEventListener("click", () =>{
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
});

// Mobile menu expand
expandBtn.forEach((btn) => {
    btn.addEventListener("click", () =>{
        btn.classList.toggle("open");
    });
});


let scrollpos = window.scrollY;
const header = document.querySelector(".page_header")
const header_height = header.offsetHeight + 200

const add_class_on_scroll = () => header.classList.add("scrolled")
const remove_class_on_scroll = () => header.classList.remove("scrolled")

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    
    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

})
