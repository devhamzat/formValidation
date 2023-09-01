const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const firstnameInput = document.querySelector("#firstName");
const lastnameInput = document.querySelector("#lastName");
const dateofbirthInput = document.querySelector("#dateOfBirth");
const genderInput = document.querySelector("#gender");
const TandcInput = document.querySelector("#checkbox");

const form = document.querySelector('#signUp');


function showError  (input, message)  {
    const formField = input.parentElement;
    formField.classList.add('error');
    const error = formField.querySelector('span');
    error.textContent = message;
};

function showSuccess (input)  {   
    const formField = input.parentElement;
    formField.classList.add('success');
    const error = formField.querySelector('span');
    error.textContent = '';
}

function isEmailValid (email) {
    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailregex.test(email);
};
function isPasswordSecure(password){
    const passwordregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return passwordregex.test(password);
};
function isFirstnameValid(firstName) {
    const firstNameregex =   /^[A-Za-z\s]+$/;
    return firstNameregex.test(firstName);   
} 
function islastnameValid(firstName) {
    const firstNameregex =   /^[A-Za-z\s]+$/;
    return firstNameregex.test(firstName);   
} 

const isRequired = value => value !== '';
const isBetween = (length, min, max) => min <= length && length <= max;

const requiredMessage = "**This field is required.";
const characterMessage = "only characters are allowed"


function checkFirstname  ()  {
    let valid = false;
    const min =2,
    max = 50;
    const firstname = firstnameInput.value.trim();
    if (!isRequired(firstname)){
        showError(firstnameInput,requiredMessage)
    }else if (!isBetween(firstname.length,min,max)) {
        showError(firstnameInput,"First name is either to short or to long")        
    }else if(!isFirstnameValid(firstname)){
        showError(firstnameInput,characterMessage)
    }
    else{
        showSuccess(firstnameInput);
        valid =true;
    }
    return valid;
};
function checkLastname() {
    let valid = false;
    const min =2,
    max =50;
    const lastname = firstnameInput.value.trim();
    if (!isRequired(lastname)) {
        showError(lastnameInput,requiredMessage);        
    }else if (!isBetween(lastname.length,min,max)) {
        showError(firstnameInput,"Last name is either to short or to long")      
}else if (!islastnameValid(lastname)) {
    showError(lastnameInput,characterMessage) 
}else{
    showSuccess(lastnameInput);
    valid=true;
}
return valid;
}

function checkUsername  ()  {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameInput.value.trim();

    if (!isRequired(username)) {
        showError(usernameInput, requiredMessage);
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameInput, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameInput);
        valid = true;
    }
    return valid;
};


function checkEmail() {
    let valid = false;
    const email = emailInput
.value.trim();
    if (!isRequired(email)) {
        showError(emailInput
        , requiredMessage);
    } else if (!isEmailValid(email)) {
        showError(emailInput
        , 'Email is not valid.')
    } else {
        showSuccess(emailInput
        );
        valid = true;
    }
    return valid;
};

function checkPassword  ()  {
    let valid = false;


    const password = passwordInput.value.trim();

    if (!isRequired(password)) {
        showError(passwordInput, requiredMessage);
    } else if (!isPasswordSecure(password)) {
        showError(passwordInput, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordInput);
        valid = true;
    }

    return valid;
};

function checkConfirmPassword(){
    let valid = false;
    const confirmPassword = confirmPasswordInput.value.trim();
    const password = passwordInput.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordInput, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordInput, 'The password does not match');
    } else {
        showSuccess(confirmPasswordInput);
        valid = true;
    }

    return valid;
};
function isTandCChecked(){
    let valid= false;
    if (!checkbox.checked){
        showError(TandcInput,requiredMessage);
    } else{
        showSuccess(TandcInput);
        valid = true;
    }
    return valid
}

form.addEventListener('submit', function (e) {
    
    e.preventDefault();

    
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isLastNameValid =checkLastname(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword(),
        isFirstnameValid = checkFirstname(),
        isTandCCheckedValid = isTandCChecked();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid&&
        isFirstnameValid &&
        isTandCCheckedValid &
        isLastNameValid;

   
    if (isFormValid) {
        window.location.href ='/succesSignup.html';
    }
});
