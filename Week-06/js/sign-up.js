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












