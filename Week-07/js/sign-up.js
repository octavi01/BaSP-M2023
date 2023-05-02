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

 // Fill form with LocalStorage data if available
 if (localStorage.getItem("signupData")) {
  var savedData = JSON.parse(localStorage.getItem("signupData"));
  inputName.value = savedData.name;
  inputLastName.value = savedData.lastName;
  inputId.value = savedData.dni;
  inputBirthdate.value = savedData.dob;
  inputPhone.value = savedData.phone;
  inputAddress.value = savedData.address;
  inputLocation.value = savedData.city;
  inputPostcode.value = savedData.zip;
  inputEmail.value = savedData.email;
  inputPassword.value = savedData.password;
  inputRepeatPassword.value = savedData.password;
}

// validate name

inputName.addEventListener("blur", function() {
    validateName(inputName.value);
})
function validateName(name) {
  var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nameArray = name.split("");
  var validName = true;

  for (var i = 0; i < nameArray.length; i++) {
    if (letters.indexOf(nameArray[i]) === -1 && nameArray[i] !== " ") {
      validName = false;
      break;
    }
  }

  if (validName && name.replace(/ /g, "").length >= 3) {
    // El nombre es válido
    nameError.textContent = "";
    inputName.classList.remove("red-border");
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
  var validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  var lastNameArray = lastName.split("");
  var validLastName = true;

  for (var i = 0; i < lastNameArray.length; i++) {
    if (validChars.indexOf(lastNameArray[i]) === -1) {
      validLastName = false;
      break;
    }
  }

  if (validLastName && lastName.length >= 3) {
    // El apellido es válido
    lastNameError.textContent = "";
    inputLastName.classList.remove("red-border");
    return true;
  } else {
    // El apellido es inválido
    inputLastName.classList.remove("input-class");
    lastNameError.textContent = "Invalid last name. Must contains only letters and spaces and at least 3.";
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
  var numbers = "0123456789";
  var idArray = id.split("");
  var validID = true;

  for (var i = 0; i < idArray.length; i++) {
    if (numbers.indexOf(idArray[i]) === -1) {
      validID = false;
      break;
    }
  }

  if (validID && id.length >= 8) {
    // El ID es válido
    idError.textContent = "";
    inputId.classList.remove("red-border");
    return true;
  } else {
    // El ID es inválido
    inputId.classList.remove("input-class");
    idError.textContent = "Invalid ID. Must contain only numbers, and more than seven.";
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
    var parts = birthdate.split('/');
    if (parts.length !== 3) {
      inputBirthdate.classList.remove("input.class");
      birthdateError.textContent = "the birthdate must have the format dd/mm/aaaa";
      inputBirthdate.classList.add("red-border");
      inputBirthdate.parentNode.insertBefore(birthdateError, inputBirthdate.nextSibling);
      return false;
    }
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      inputBirthdate.classList.remove("input.class");
      birthdateError.textContent = "the birthdate must have the format dd/mm/aaaa";
      inputBirthdate.classList.add("red-border");
      inputBirthdate.parentNode.insertBefore(birthdateError, inputBirthdate.nextSibling);
      return false;
    }
    if (day < 1 || day > 31 || month < 1 || month > 12) {
      inputBirthdate.classList.remove("input.class");
      birthdateError.textContent = "the birthdate must be a valid date";
      inputBirthdate.classList.add("red-border");
      inputBirthdate.parentNode.insertBefore(birthdateError, inputBirthdate.nextSibling);
      return false;
    }
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    if (year > currentYear) {
      inputBirthdate.classList.remove("input.class");
      birthdateError.textContent = "the birthdate must be in the past";
      inputBirthdate.classList.add("red-border");
      inputBirthdate.parentNode.insertBefore(birthdateError, inputBirthdate.nextSibling);
      return false;
    }
    var minYear = currentYear - 120;
    if (year < minYear) {
      inputBirthdate.classList.remove("input.class");
      birthdateError.textContent = "the birthdate must be less than 120 years ago";
      inputBirthdate.classList.add("red-border");
      inputBirthdate.parentNode.insertBefore(birthdateError, inputBirthdate.nextSibling);
      return false;
    }
    birthdateError.textContent = "";
    return true;
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
  var isValid = true;
  
  if (phone.length !== 10) {
      isValid = false;
  } else {
      for (var i = 0; i < phone.length; i++) {
          if (isNaN(parseInt(phone[i]))) {
              isValid = false;
              break;
          }
      }
  }
  
  if (isValid) {
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
  var hasLetter = false;
  var hasNumber = false;
  var hasSpace = false;

  if (address.length < 5) {
    addressError.textContent = "Invalid Address. Must contain at least 5 characters";
    inputAddress.classList.remove("input-class");
    inputAddress.classList.add("red-border");
    inputAddress.parentNode.insertBefore(addressError, inputAddress.nextSibling);
    return false;
  }

  for (var i = 0; i < address.length; i++) {
    var char = address.charAt(i);
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
      hasLetter = true;
    } else if (char >= '0' && char <= '9') {
      hasNumber = true;
    } else if (char === ' ') {
      hasSpace = true;
    }
  }

  if (hasLetter && hasNumber && hasSpace && address.length >= 5) {
    addressError.textContent = "";
    return true;
  } else {
    inputAddress.classList.remove("input-class");
    addressError.textContent = "Invalid Address. Must contain at least 5 characters, with numbers, letters and a space between them";
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
  var alphanumericChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var isValid = true;
  if (location.trim().length < 3) {
    isValid = false;
  } else {
    for (var i = 0; i < location.length; i++) {
      if (alphanumericChars.indexOf(location[i]) === -1 && location[i] !== " ") {
        isValid = false;
        break;
      }
    }
  }
  if (isValid) {
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
  if (!isNaN(postcode) && postcode.length >= 4 && postcode.length <= 5) {
    postcodeError.textContent = "";
    return true;
} else {
    postcodeError.textContent = "Invalid Postcode. Must contain between 4-5 numbers";
    inputPostcode.classList.remove("input-class");
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
  
  // Register Button
  var registerButton = document.getElementById("register-button");

   registerButton.addEventListener("click", function() {
    // Valid empty fields
    if ((inputName.value.trim().length !== 0) && 
        (inputLastName.value.trim().length !== 0) && 
        (inputId.value.trim().length !== 0) && 
        (inputBirthdate.value.trim().length !== 0) && 
        (inputPhone.value.trim().length !== 0) && 
        (inputAddress.value.trim().length !== 0) && 
        (inputLocation.value.trim().length !== 0) && 
        (inputPostcode.value.trim().length !== 0) && 
        (inputEmail.value.trim().length !== 0) && 
        (inputPassword.value.trim().length !== 0) && 
        (inputRepeatPassword.value.trim().length !== 0)){

        // Valid error fields
        if ((nameError.textContent  == '') && 
            (lastNameError.textContent  == '') && 
            (idError.textContent  == '') && 
            (birthdateError.textContent  == '') && 
            (phoneError.textContent  == '') && 
            (addressError.textContent  == '') && 
            (locationError.textContent  == '') && 
            (postcodeError.textContent  == '') && 
            (emailError.textContent  == '') && 
            (passwordError.textContent  == '') && 
            (repeatPasswordError.textContent  == '') ){

             /* alert('Name: ' + inputName.value + '\n' + 
                  'Last name: ' + inputLastName.value + '\n' + 
                  'Dni: ' + inputId.value + '\n' + 
                  'Birth date: ' + inputBirthdate.value + '\n' + 
                  'Telephone number: ' + inputPhone.value + '\n' + 
                  'Address: ' + inputAddress.value + '\n' + 
                  'Location: ' + inputLocation.value + '\n' + 
                  'Postal code: ' + inputPostcode.value + '\n' + 
                  'Email: ' + inputEmail.value + '\n' + 
                  'Password: ' + inputPassword.value + '\n' + 
                  'Password repeat: ' + inputRepeatPassword.value);*/
            // Build URL with form data
    var url = "https://api-rest-server.vercel.app/signup" +
    "?name=" + inputName.value +
    "&lastName=" + inputLastName.value +
    "&dni=" + inputId.value +
    "&dob=" + inputBirthdate.value +
    "&phone=" + inputPhone.value +
    "&address=" + inputAddress.value +
    "&city=" + inputLocation.value +
    "&zip=" + inputPostcode.value +
    "&email=" + inputEmail.value +
    "&password=" + inputPassword.value;

    // Send HTTP request with Fetch
    fetch(url)
    .then(function(response) {
            return response.json();
    })
    .then(function(data) {
        // Show alert with success message and response data
        if (data.success == false) {
          throw data.msg
        }
        console.log(data.msg);
         alert("Sign up successful. " + JSON.stringify(data.msg));
        // Store form data in LocalStorage
         localStorage.setItem("signupData", JSON.stringify(data.data));

    })
    .catch(function(error) {
        // Show alert with error message
        alert("Sign up error. " + error);
    });


            } else {
              var errorMsg = '';
              if (nameError.textContent !== ''){
                errorMsg += "Name: invalid name. Must contain only letters and be at least 3 characters long.\n";
              }
              if (lastNameError.textContent !== ''){
                errorMsg += "Last Name: invalid last name. Must contain only letters and be at least 3 characters long.\n";
              }
              if (idError.textContent !== ''){
                errorMsg += "ID: Invalid ID. Must contain only numbers and be at least 8 digits long.\n";
              }
              if (birthdateError.textContent !== ''){
                errorMsg += "Birthdate: Invalid birthdate. Must have the format dd/mm/yyyy and be a valid date.\n";
              }
              if (phoneError.textContent !== ''){
                errorMsg += 
                "Phone: Invalid phone number. Must contain only numbers, exactly 10 digits long, and without area code or country code.\n";
              }
              if (addressError.textContent !== ''){
                errorMsg += "Address: Invalid address. Must contain at least 5 characters, including letters, numbers, and spaces.\n";
              }
              if (postcodeError.textContent !== ''){
                errorMsg += "Location: Invalid location. Must contain at least 3 alphanumeric characters.\n";
              }
                if (emailError.textContent !== ''){
                    errorMsg += "E-Mail: Invalid E-Mail. Must contain a valid format. Example@gmail.com"; + '\n';
                }
                if (passwordError.textContent !== ''){
                    errorMsg += 
                    "Password: Invalid Password. You need at least 5 letters (one uppercase, one lowercase, and one number)";  + '\n';
                }
                if (repeatPasswordError.textContent !== ''){
                    errorMsg +=" Repeat Password: Passwords do not match"; + '\n';
                }
                alert(errorMsg);
            }
        }else{
            alert('* Complete the fields to enter')
        }
    });
















