

function validate (preStare ,inputName , inputValue ){
    const defaultErr = preStare
    const emailRegex = RegExp( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    switch (inputName){
        case 'firstName':
            if(inputValue.length === 0){
                 return {
                    ...defaultErr,
                     firstNameErr: "First Name is required"
                }
            }else if (inputValue.length > 0 && inputValue.length <3){
                return {
                    ...defaultErr,
                    firstNameErr: "First Name is too short"
                }
            }if(inputValue.length >= 3) {
                return {
                    ...defaultErr,
                    firstNameErr: "",
                    isFirstNameValid: true
                }
            }
            break
        case 'lastName':
            if(inputValue.length ===0){
                return {
                    ...defaultErr,
                    lastNameErr: "Last Name is required"
                }
            }else if (inputValue.length > 0 && inputValue.length < 3){
                return {
                    ...defaultErr,
                    lastNameErr: "Last Name is too short"
                }
            }else if(inputValue.length >= 3){
                return {
                    ...defaultErr,
                    lastNameErr: "",
                    isLastNameValid: true,
                }
            }else {
                return defaultErr
            }
        case 'email':
            if(inputValue.length === 0){
                return defaultErr
            }else if (emailRegex.test(inputValue)){
                return {
                    ...defaultErr,
                    emailErr: "",
                    isEmailValid: true
                }
            }else {
                return {
                    ...defaultErr,
                    emailErr: "Email is not valid",
                    isEmailValid: false
                }
            }
        case 'password':
            if(inputValue.length < 8){
                return {
                    ...defaultErr,
                    passwordErr: "Password must be between 8 and 30 characters",
                    isPasswordValid: false
                }
            }if (inputValue.length >= 8 && inputValue.length <=30){
                return {
                    ...defaultErr,
                    passwordErr: "",
                    isPasswordValid: true
                }
            }else if (inputValue.length > 30){
                return {
                    ...defaultErr,
                    passwordErr: "Password is too long",
                    isPasswordValid: false
                }
            }
            break
        default:
            return defaultErr
    }
}

module.exports = validate;