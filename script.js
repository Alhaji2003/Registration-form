//All inputs get 
//Step-1
let form = document.getElementById('form')
let username = document.getElementById('user')
let email = document.getElementById('email')
let password = document.getElementById('password')
let cpassword = document.getElementById('cpassword')

//form click function 
//Step-2
form.addEventListener('submit', (event) => {
    if (!validateInputs()) {
        event.preventDefault()
    }

})

//validateInputs function
//Step-3
function validateInputs() {
    const usernamevalue = username.value.trim()
    const emailvalue = email.value.trim()
    const passwordvalue = password.value.trim()
    const cpasswordvalue = cpassword.value.trim()
    let success = true

    //Step-7
    //if else

    //username
    if (usernamevalue === '') {
        success = false
        setError(username, 'Username is required')
    }
    else {
        setSuccess(username)
    }

    //email
    if (emailvalue === '') {
        success = false
        setError(email, 'Email is required')
    }
    else if (!validateEmail(emailvalue)) {
        success = false
        setError(email, 'Please enter a valid email')
    }
    else {
        setSuccess(email)
    }

    //password
    if (passwordvalue === '') {
        success = false
        setError(password, 'Password is required')
    }
    else if (passwordvalue.length < 8) {
        success = false
        setError(password, 'Password must be atleast Character')
    }
    else {
        setSuccess(password)
    }


    //cpassword
    if (cpasswordvalue === '') {
        success = false
        setError(cpassword, 'Confirm password is required')
    }
    else if (cpasswordvalue !== passwordvalue) {
        success = false
        setError(cpassword, 'Password does not match')
    }
    else {
        setSuccess(cpassword)
    }

    return success

}

//Step-4
//Error message function
//eg:element -password, message-pwd is required
function setError(element, message) {
    let inputGroup = element.parentElement;
    let errorelement = inputGroup.querySelector('.error')
    errorelement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}

//Step-5
//Success message function
//eg:element -password
function setSuccess(element) {
    let inputGroup = element.parentElement;
    let errorelement = inputGroup.querySelector('.error')
    errorelement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}

//Step-6
//Email validate function
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
            // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}