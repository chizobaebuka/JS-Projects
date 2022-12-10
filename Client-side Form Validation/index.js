const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    checkInput();
})

function checkInput(){
    // Get all the values from the inputs 
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password.value.trim();

    if(usernameValue === ""){
        //  Show error & add error class
        setErrorFor(username, 'username cannot be empty')
    }else{
        // add success class 
        setSuccessFor(username);
    }
    if(emailValue === ""){
        //  Show error & add error class
        setErrorFor(email, 'email cannot be blank')
    }else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }else{
        setSuccessFor(email);
    }

    if (passwordValue === ''){
        //  Show error & add error class
        setErrorFor(password, 'password cannot be empty')
    }else{
        // add success class 
        setSuccessFor(password);
    }
    if (password2Value === ''){
        //  Show error & add error class
        setErrorFor(password2, 'password2 cannot be empty')
    }else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match')
    }else {
        // add success class 
        setSuccessFor(password2);
    }

    // Show a success message
    


}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    // add error message inside small tag
    small.innerText = message;
    // add error name
    formControl.ClassName = "form-control error";
}

function setSuccessFor(input, message){
    const formControl = input.parentElement;
    formControl.ClassName = "form-control success";
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)!(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])!(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



