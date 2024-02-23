let header = document.querySelector("header") ; 
let header_container = document.querySelector("header .container")
let menu_bar_icon = document.querySelector("header .menu-bar") ; 
let header_ul = document.querySelector("header ul")
let header_li = document.querySelectorAll("header ul li")  ;
document.onscroll = function () {
    if (scrollY >= 10) {
        header.style.backgroundColor = "black" 
        header_container.style.padding = "30px"

    }
    else {
        header.style.backgroundColor = "transparent" ; 
        header_container.style.padding = "30px"
    }
}

menu_bar_icon.onclick = function() {
    onClickMenu() ; 
}
function onClickMenu() {
    header.style.height = "418px" ; 
    console.log("clicked")
    menu_bar_icon.onclick = function() {
        onRemoveClickMenu() ; 
    }
}
function onRemoveClickMenu() {
    header.style.height = "58px"
    console.log("remove")
    menu_bar_icon.onclick = function() {
        onClickMenu() ; 
    }
}