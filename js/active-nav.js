const nav = document.getElementById("navbar");
const btns = document.getElementsByClassName("nav-link");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (evt) => {
        var current = document.getElementsByClassName("active");
        current[0].classList.remove("active")
        evt.target.classList.add("active")
    })
}
