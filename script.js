let burgerBtn = document.querySelector("#burger-btn");
console.log(burgerBtn)
let hamburger = document.querySelector("#hamburger");
let burgerToggle = true;
let messageFormInputs = document.querySelectorAll(".form-input");

function toggleBurger() {
    console.log(hamburger.classList)
    console.log(burgerToggle)
    burgerToggle = !burgerToggle;
    if(burgerToggle == false){
        hamburger.classList.remove("ham-hide");
    }else{
        hamburger.classList.add("ham-hide");
    }
}
burgerBtn.addEventListener("click", toggleBurger);

function clearForm(){
    for( let input of messageFormInputs){
        input.value = "";
    }
}

function navigateTo(path){
    window.open(path)
}

function sendEmail() {
    var email = 'joe.lemay.dev06@gmail.com';
    var subject = 'Lets Collaborate';
    var emailBody = 'Hello Joe, Lets start something exciting!';
    document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody
}
