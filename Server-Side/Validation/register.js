const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterData(data) { 
    //data argument is customer information sent from front end

    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    
    if (validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};