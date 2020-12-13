function validateContactForm(){
    let name = document.forms["contact-form"]["name-input"].value;
    let email = document.forms["contact-form"]["email-input"].value;
    let message = document.forms["contact-form"]["message-input"].value;

    if(name == "" || email == "" || message == ""){
        alert("You must fill in all form fields!");
        return false;
    }else{
        return true;
    }
    
}