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



