 const btn = document.getElementById("menu");
 btn.addEventListener('click',navToggleBtn);
 const navmenu = document.getElementById("menu-content");
 function navToggleBtn(){
    
    btn.classList.toggle("open");
    navmenu.classList.toggle("hidden");
    navmenu.classList.toggle("flex");
 }