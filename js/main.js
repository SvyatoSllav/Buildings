let burgerMenu = document.querySelector(".burger")
let burgerContainer = burgerMenu.closest(".container")
let containerMarginRight = window.getComputedStyle(burgerContainer).marginRight
console.log(parseInt(containerMarginRight) * 2)
// burgerMenu.style.right = (document.body.clientWidth - burgerContainer.offsetWidth) / 2 - 60 + "px"
burgerMenu.style.right = parseInt(containerMarginRight) + "px"
console.log(burgerMenu.style.right)
// console.log(burgerContainer.offsetWidth)
burgerMenu.onclick = () => {
    let sidebar = document.querySelector(".sidebar-nav")
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

let contactButtons = document.body.querySelectorAll(".request__send-mail")
contactButtons.forEach(contactButton => {
    contactButton.addEventListener("click", showContactModal)
})

let wrapper = document.querySelector(".contact-modal-wrapper")
let contactModal = document.querySelector(".contact-modal")
let overlay = document.querySelector(".overlay")
overlay.addEventListener("click", hideContactModal)