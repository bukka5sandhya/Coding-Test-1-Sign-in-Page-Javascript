let inputElementEle = document.getElementById("inputElement");
let passwordElementEle = document.getElementById("passwordElement");
let signInBtnElement = document.getElementById("signInBtn");
let messageTextElement = document.getElementById("messageText");

function  signIn(){
    let inputElementValue = inputElementEle.value ;
    let passwordElementValue = passwordElementEle.value;
    if(inputElementValue === ""){
        messageTextElement.textContent ="Please Enter Your Name";
    }else if(passwordElementValue === ""){
        messageTextElement.textContent = "Please Enter Your Password";
    }else{
        messageTextElement.textContent = "Welcome";
    }


}