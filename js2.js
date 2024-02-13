let loc = window.location.search.toString().slice(1, window.location.search.length);
if (loc == "net") {
    offline();
} else {
    setTimeout(function () {
        let status = window.navigator.onLine;
        if (status == true) {
            window.location.href = "main.html";
        } else if (status == false) {
            window.location.href = window.location.href + "?net";
        }
    }, 3000);
}
$(".button").click(function () {
    window.location.href = "logo.html";
});
function offline() {
    $(".network").css("display", "flex");
}