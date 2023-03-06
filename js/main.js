burgerMenu = document.querySelector(".burger")
burgerContainer = burgerMenu.closest(".container")
burgerMenu.style.right = (document.body.clientWidth - burgerContainer.offsetWidth) / 2 - 60 + "px"

burgerMenu.onclick = () => {
    console.log(document.body.clientWidth)
    sidebar = document.querySelector(".sidebar-nav")
    console.log(sidebar)
    if (sidebar.classList.contains("sidebar-nav_hide")) {
        sidebar.classList.remove("sidebar-nav_hide")
    } else {
        sidebar.classList.add("sidebar-nav_hide")
    }
}