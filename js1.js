$(document).ready(function () {
    document.getElementById("hello").setAttribute("style", "display: block;");
    document.getElementById("coin").innerHTML = window.atob(nts);
    let loc = window.location.search.toString().slice(6, window.location.search.length);
    let digit_1 = Math.floor(Math.random() * 99);
    let digit_2 = Math.floor(Math.random() * 99);
    let answer = 0;
    setInterval(function () {
        if (window.navigator.onLine == false) {
            window.location.href = "logo.html?net";
        }
    }, 1000);
    if (loc == "add") {
        answer = digit_1 + digit_2;
        shuffle_option(999, answer);
        document.getElementById("qus").innerHTML = digit_1 + " + " + digit_2 + " = ?";
    } else if (loc == "sub") {
        answer = digit_1 - digit_2;
        shuffle_option(99, answer);
        document.getElementById("qus").innerHTML = digit_1 + " - " + digit_2 + " = ?";
    } else if (loc == "mul") {
        answer = digit_1 * digit_2;
        shuffle_option(9999, answer);
        document.getElementById("qus").innerHTML = digit_1 + " × " + digit_2 + " = ?";
    } else if (loc == "div") {
        answer = Math.floor(digit_1 / digit_2);
        shuffle_option(99, answer);
        document.getElementById("qus").innerHTML = digit_1 + " ÷ " + digit_2 + " = ?";
    } else if (loc != "add" || loc != "sub" || loc != "mul" || loc != "div") {
        window.location.href = "main.html";
    }
    $(".opt").click(function () {
        let slected_option = $(this).html();
        if (slected_option == answer) {
            $(".shadow").css("visibility", "visible");
            $(".wtxt").css("display", "block");
            $(".coin").css("display", "block");
            $(".claim").css("display", "flex");
            $(".notxt").css("display", "block");
            //win

            $(".claim").click(function () {
                location.reload();
            });


        } else {
            $(".shadow").css("visibility", "visible");
            $(".txt").css("display", "block");
            $(".cor_ans").html(answer);
            $(".cor_ans").css("display", "block");
            $(".retry").css("display", "inline-block");
            $(".retry").click(function () {
                location.reload();
            });
        }
    });
});
function shuffle_option(size, correct) {
    let opt_1 = Math.floor(Math.random() * size);
    let opt_2 = Math.floor(Math.random() * size);
    let opt_3 = Math.floor(Math.random() * size);
    let opt_4 = correct;
    let opt_array = [opt_1, opt_2, opt_3, opt_4];
    opt_array.sort(() => Math.random() - 0.5);
    $(".opt:eq(0)").html(opt_array[0]);
    $(".opt:eq(1)").html(opt_array[1]);
    $(".opt:eq(2)").html(opt_array[2]);
    $(".opt:eq(3)").html(opt_array[3]);
}