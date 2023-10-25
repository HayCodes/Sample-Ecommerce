const menu = document.getElementById("menu"),
dropdownBtn = document.getElementById("dropdown");

dropdownBtn.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});