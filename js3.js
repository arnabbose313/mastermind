$(document).ready(function () {
    document.getElementById("coin").innerHTML = window.atob(nts);
    setInterval(function () {
        if (window.navigator.onLine == false) {
            window.location.href = "logo.html?net";
        }
    }, 1000);
    $("#photo1").click(function () {
        window.location.href = "profile.html";
    });
    $(".sty").click(function () {
        window.location.href = "calc.html?type=" + this.id;
    });
});