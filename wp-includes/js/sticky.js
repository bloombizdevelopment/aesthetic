window.addEventListener("scroll", function () {
    let container = document.getElementById("sticky-container");
    if (window.scrollY > 0) {
        container.classList.add("sticky");
    } else {
        container.classList.remove("sticky");
    }
});
