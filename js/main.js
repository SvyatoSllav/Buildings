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
function showContactModal() {
    if (wrapper.classList.contains("hide")) {
        wrapper.style.zIndex = "2"
        wrapper.style.visibility = "visible"
        contactModal.style.visibility = "visible"
        overlay.style.visibility = "visible"
        wrapper.classList.remove("hide")
    } else {
        wrapper.style.zIndex = "1"
        wrapper.style.visibility = "hidden"
        contactModal.style.visibility = "hidden"
        overlay.style.visibility = "hidden"
        wrapper.classList.add("hide")
    }
}
function hideContactModal() {
    wrapper.style.zIndex = "1"
    wrapper.style.visibility = "hidden"
    contactModal.style.visibility = "hidden"
    overlay.style.visibility = "hidden"
    wrapper.classList.add("hide")
}

contactButtons = document.body.querySelectorAll(".request__send-mail")
contactButtons.forEach(contactButton => {
    contactButton.addEventListener("click", showContactModal)
})

wrapper = document.querySelector(".contact-modal-wrapper")
contactModal = document.querySelector(".contact-modal")
overlay = document.querySelector(".overlay")
overlay.addEventListener("click", hideContactModal)