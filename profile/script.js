const nam = document.getElementById("names");
const mail = document.getElementById("email");
const mas = document.getElementById("message");

document.getElementById("send").addEventListener("click", function (e) {
    e.preventDefault();
    if (nam.value != "" && mail.value != "" && mas.value != "") {
        sending();
    }
});

function sending() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sirarnab.bose.2006@gmail.com",
        Password : "97AD5DB8410FFC9F733586A02E8EF0BC68C0",
        To : "sirarnab.bose.2006@gmail.com",
        From : "sirarnab.bose.2006@gmail.com",
        Subject : "New from submitted",
        Body : "<div style='width: 100%; height: auto; background-color: #2c8fec; box-sizing: border-box; padding: 10px 0px; border-radius: 5px;'><div style='text-align: center; color: #fff; font-size: 30px; font-weight: bold; padding: 30px 0px;'>MASTERMIND</div><div style='box-sizing: border-box; background: #fff; padding: 10px; margin: 10px; border-radius: 5px;'><span style='color: #0f62af; font-weight: bold;'>Name : </span>" + nam.value + "</div><div style='box-sizing: border-box; background: #fff; padding: 10px; margin: 10px; border-radius: 5px;'><span style='color: #0f62af; font-weight: bold;'>Email : </span>" + mail.value + "</div><div style='box-sizing: border-box; background: #fff; padding: 10px; margin: 10px; border-radius: 5px; text-align: justify;'>" + mas.value + "</div></div>"
    }).then(
        message => {
            if(message == "OK"){
                alert("Your message is successfully submitted");
            }else{
                alert("Some error occurred, please try again");
            }
        }
    );
}