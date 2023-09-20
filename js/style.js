document.addEventListener("DOMContentLoaded", function () {
    var parent = document.querySelector(".modal-parent");
    var aboutLink = document.getElementById("aboutLink");
    var X = document.querySelector(".x");

    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();
        appear();
    });

    function appear() {
        parent.style.display = "block";
        document.body.classList.add("modal-open");
        document.getElementById("main").classList.add("modal-open");
    }

    X.addEventListener("click", disappearX);

    function disappearX() {
        parent.style.display = "none";
        document.body.classList.remove("modal-open");
        document.getElementById("main").classList.remove("modal-open");
    }

    parent.addEventListener("click", disappearParent);

    function disappearParent(e) {
        if (e.target.className === "modal-parent") {
            parent.style.display = "none";
            document.body.classList.remove("modal-open");
            document.getElementById("main").classList.remove("modal-open");
        }
    }
});
