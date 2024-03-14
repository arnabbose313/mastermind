const nam = document.getElementById("name");
const mail = document.getElementById("email");
const mas = document.getElementById("message");

document.getElementById("send").addEventListener("click", function(e){
    e.preventDefault();
    if(nam.value != "" && mail.value != "" && mas.value != ""){
        sending();
    }
});

function sending() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sirarnab.bose.2006@gmail.com",
        Password : "yztkhgrcuglveezy",
        To : "latikabose1976@gmail.com",
        From : mail.value,
        Subject : "New from submitted",
        Body : "Hello Guys"
    }).then(
        message => alert(message)
    );
}