let email_input = document.getElementById("email_input");
let text_error = document.getElementById("text_error");
let error_icon = document.getElementById("error_icon");
email_input.onkeydown = function () {
    reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email_input.value))
    {

        text_error.style.display ='none';
        error_icon.style.display = 'none';
        
    }
    else {
                     text_error.style.display = 'block';
                     error_icon.style.display = 'block';
                     
                 }
                }