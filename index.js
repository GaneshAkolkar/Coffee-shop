const bar = document.querySelector(".bar i"),
menu_item = document.querySelector(".menu_item");

bar.addEventListener("click",() => {
    menu_item.classList.toggle('active');
    bar.classList.toggle('bx-x')
})

window.onscroll=(()=>{
    menu_item.classList.remove('active');
    bar.classList.remove('bx-x')
})