// form validate.

var inputName = document.getElementById("input-name");
var nameError = document.createElement("div");
var inputLastName = document.getElementById("input-last-name");
var lastNameError = document.createElement("div");
var inputId = document.getElementById("input-id");
var idError = document.createElement("div");
var inputBirthdate = document.getElementById("input-birthdate");
var birthdateError = document.createElement("div");
var inputPhone = document.getElementById("input-phone");
var phoneError = document.createElement("div");
var inputAddress = document.getElementById("input-address");
var addressError = document.createElement("div");
var inputLocation = document.getElementById("input-location");
var locationError = document.createElement("div");
var inputPostcode = document.getElementById("input-postcode");
var postcodeError = document.createElement("div");
var inputEmail = document.getElementById("input-email");
var emailError = document.createElement("div");
var inputPassword = document.getElementById("input-password");
var passwordError = document.createElement("div");
var inputRepeatPassword = document.getElementById("input-repeat-password");
var repeatPasswordError = document.createElement("div");
var repeatPassword = inputRepeatPassword.value;

// validate name

inputName.addEventListener("blur", function() {
    validateName(inputName.value);
})
function validateName(name) {  
    var nameRegex = /^[a-zA-Z]{3,}$/;
    if (nameRegex.test(name)) {
      // El nombre es válido
      nameError.textContent = "";
      return true;
    } else {
      // El nombre es inválido
      inputName.classList.remove("input-class");
      nameError.textContent = "Invalid name. Must contains only letters and at least 3.";
      inputName.classList.add("red-border");
      inputName.parentNode.insertBefore(nameError, inputName.nextSibling);
      return false;
    }
  }
  inputName.onfocus = function () {
    inputName.classList.remove("red-border");
    nameError.textContent = "";
}

// validate Last Name 

inputLastName.addEventListener("blur", function() {
    validateLastName(inputLastName.value);
})
function validateLastName(lastName) {
    
    var lastNameRegex = /^[a-zA-Z]{3,}$/;
    
    if (lastNameRegex.test(lastName)) {
      // El nombre es válido
      lastNameError.textContent = "";
      return true;
    } else {
      // El nombre es inválido
      inputLastName.classList.remove("input-class");
      lastNameError.textContent = "Invalid last name. Must contains only letters and at least 3.";
      inputLastName.classList.add("red-border");
      inputLastName.parentNode.insertBefore(lastNameError, inputLastName.nextSibling);
      return false;
    }
  }
  inputLastName.onfocus = function () {
    inputLastName.classList.remove("red-border");
    lastNameError.textContent = "";
}

// validate ID

inputId.addEventListener("blur", function() {
    validateID(inputId.value);
})
function validateID(id) {
    var idRegex = /^[0-9]{8,}$/;
    if (idRegex.test(id)) {
      idError.textContent = "";
      return true;
    } else {
      inputId.classList.remove("input-class");
      idError.textContent = "Invalid ID. Must contain only numbers, and more than seven";
      inputId.classList.add("red-border");
      inputId.parentNode.insertBefore(idError, inputId.nextSibling);  
      return false;
    }
  }
  inputId.onfocus = function () {
    inputId.classList.remove("red-border");
    idError.textContent = "";
  }

  // validate Birthdate

  inputBirthdate.addEventListener("blur", function() {
    validateBirthdate(inputBirthdate.value);
  })
  function validateBirthdate(birthdate) {
    var birthdateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (birthdateRegex.test(birthdate)) {
      birthdateError.textContent = "";
      return true;
    } else {
        inputBirthdate.classList.remove("input.class");
        birthdateError.textContent = "the birthdate must have the format dd/mm/aaaa";
        inputBirthdate.classList.add("red-border");
        inputBirthdate.parentNode.insertBefore(birthdateError, inputBirthdate.nextSibling);
        return false;
    }
  }
  inputBirthdate.onfocus = function () {
    inputBirthdate.classList.remove("red-border");
    birthdateError.textContent = "";
  }

  // validate Phone

  inputPhone.addEventListener("blur", function() {
    validatePhone(inputPhone.value);
})
function validatePhone(phone) {
    var phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(phone)) {
      phoneError.textContent = "";
      return true;
    } else {
      inputPhone.classList.remove("input-class");
      phoneError.textContent = 
      "Invalid Phone number. Must contain just numbers, exactly 10.(areacode without 0 and phone number without 15)";
      inputPhone.classList.add("red-border");
      inputPhone.parentNode.insertBefore(phoneError, inputPhone.nextSibling);  
      return false;
    }
  }
  inputPhone.onfocus = function () {
    inputPhone.classList.remove("red-border");
    phoneError.textContent = "";
  }

  // validate Address

  inputAddress.addEventListener("blur", function() {
    validateAddress(inputAddress.value);
})
function validateAddress(address) {
    var addressRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+\s[A-Za-z\d]+.*$/;
    if (addressRegex.test(address)) {
      addressError.textContent = "";
      return true;
    } else {
      inputAddress.classList.remove("input-class");
      addressError.textContent = 
      "Invalid Address. Must contain at least 5 characters, with numbers, letters and an space between them";
      inputAddress.classList.add("red-border");
      inputAddress.parentNode.insertBefore(addressError, inputAddress.nextSibling);  
      return false;
    }
  }
  inputAddress.onfocus = function () {
    inputAddress.classList.remove("red-border");
    addressError.textContent = "";
  }

  // validate Location

  inputLocation.addEventListener("blur", function() {
    validateLocation(inputLocation.value);
})
function validateLocation(location) {
    var locationRegex = /\b\w{3,}\b/;
    if (locationRegex.test(location)) {
      locationError.textContent = "";
      return true;
    } else {
      inputLocation.classList.remove("input-class");
      locationError.textContent = "Invalid Location. Must contain at least 3 alphanumeric characters";
      inputLocation.classList.add("red-border");
      inputLocation.parentNode.insertBefore(locationError, inputLocation.nextSibling);  
      return false;
    }
  }
  inputLocation.onfocus = function () {
    inputLocation.classList.remove("red-border");
    locationError.textContent = "";
  }

  // validate Postcode

  inputPostcode.addEventListener("blur", function() {
    validatePostcode(inputPostcode.value);
})
function validatePostcode(postcode) {
    var postcodeRegex = /^\d{4,5}$/;
    if (postcodeRegex.test(postcode)) {
      postcodeError.textContent = "";
      return true;
    } else {
      inputPostcode.classList.remove("input-class");
      postcodeError.textContent = "Invalid Postcode. Must contain between 4-5 numbers";
      inputPostcode.classList.add("red-border");
      inputPostcode.parentNode.insertBefore(postcodeError, inputPostcode.nextSibling);  
      return false;
    }
  }
  inputPostcode.onfocus = function () {
    inputPostcode.classList.remove("red-border");
    postcodeError.textContent = "";
  }

  // validate E-Mail

  inputEmail.addEventListener("blur", function() {
    validateEmail(inputEmail.value);
})
function validateEmail(email) {
    var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      emailError.textContent = "";
      return true;
    } else {
      inputEmail.classList.remove("input-class");
      emailError.textContent = "Invalid E-Mail. Must contain a valid format. Example@gmail.com";
      inputEmail.classList.add("red-border");
      inputEmail.parentNode.insertBefore(emailError, inputEmail.nextSibling);  
      return false;
    }
  }
  inputEmail.onfocus = function () {
    inputEmail.classList.remove("red-border");
    emailError.textContent = "";
  }

  // validate Password

  inputPassword.onblur = function () {
    var password = inputPassword.value;
    var hasBigLetter = false;
    var hasSmallLetter = false;
    var hasNumber = false;
    for (var i = 0; i < password.length; i++) {
      var char = password.charAt(i);
      if (char >= "0" && char <= "9") {
        hasNumber = true;
      } else if (char === char.toUpperCase()) {
        hasBigLetter = true;
      } else if (char === char.toLowerCase()) {
        hasSmallLetter = true;
      }
    }
  
    if (!hasBigLetter || !hasSmallLetter || !hasNumber) {
        inputPassword.classList.remove("input-class");
        passwordError.textContent = 
        "Invalid Password. You need at least 5 letters (one uppercase, one lowercase, and one number)";
        inputPassword.classList.add("red-border");
        inputPassword.parentNode.insertBefore(passwordError, inputPassword.nextSibling);  
        return false;
    }
    if (password.length < 5) {
        inputPassword.classList.remove("input-class");
        passwordError.textContent = 
        "Invalid Password. You need at least 5 letters (one uppercase, one lowercase, and one number)";
        inputPassword.classList.add("red-border");
        inputPassword.parentNode.insertBefore(passwordError, inputPassword.nextSibling);  
        return false;
    } 
    if (hasBigLetter && hasSmallLetter && hasNumber && password.length >=5 ) {
        passwordError.textContent = "";
        return true;
    }
  };
  
  inputPassword.onfocus = function () {
    inputPassword.classList.remove("red-border");
    passwordError.textContent = "";
  };
  
  // validate Repeat Password

  inputRepeatPassword.onblur = function () {
    var repeatPassword = inputRepeatPassword.value;
    var password = inputPassword.value;
    if (repeatPassword !== password) {
      inputRepeatPassword.classList.remove("input-class");
      repeatPasswordError.textContent = "Passwords do not match";
      inputRepeatPassword.classList.add("red-border");
      inputRepeatPassword.parentNode.insertBefore(repeatPasswordError, inputRepeatPassword.nextSibling);
      return false;
    }
    repeatPasswordError.textContent = "";
    return true;
  };
  
  inputRepeatPassword.onfocus = function () {
    inputRepeatPassword.classList.remove("red-border");
    repeatPasswordError.textContent = "";
  };














