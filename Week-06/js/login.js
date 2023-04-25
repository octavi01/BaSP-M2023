//  E-Mail Validation
var emailError = document.createElement("div");
var inputEmail = document.getElementById("email-input");
var passwordError = document.createElement("div");
   
 inputEmail.addEventListener("blur", function() {
    validarCorreo(inputEmail.value);
})

function validarCorreo(email) {
    var regex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

    if (regex.test(email)) {

    } else {
        inputEmail.classList.remove("email-class");
        inputEmail.classList.add("red-border");
        inputEmail.parentNode.insertBefore(emailError, inputEmail.nextSibling);
        emailError.textContent = "invalid E-Mail";
    }
}
inputEmail.onfocus = function () {
    inputEmail.classList.remove("red-border");
    emailError.textContent = "";
}

// Password Validation

var inputPassword = document.getElementById("password-input");
var passwordErrorMsg = document.getElementById("fpassword-error-msg");

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
      passwordErrorMsg.classList.remove("correct");
      passwordErrorMsg.classList.add("error");
      passwordErrorMsg.textContent =
        "Invalid Password. You need at least one uppercase, one lowercase, and one number.";
    }
  
    if (password.length < 5) {
      passwordErrorMsg.classList.remove("correct");
      passwordErrorMsg.classList.add("error");
      passwordErrorMsg.textContent = "Invalid Password. You need at least five letters";
    } 
    if (hasBigLetter && hasSmallLetter && hasNumber && password.length >=5 ) {
        passwordErrorMsg.textContent = "";
    }
  };
  
  inputPassword.onfocus = function () {
    passwordErrorMsg.classList.remove("error");
    passwordErrorMsg.classList.add("correct");
  };
  
// Login button

var loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function() {
    if ((inputEmail.value.trim().length !== 0) && (inputPassword.value.trim().length !== 0)) {
        
        if ((emailError.textContent  == "") && ( passwordErrorMsg.textContent == "")) {
            alert("Email: " + inputEmail.value + "\n" + "Password: " + inputPassword.value)
        } else {
            if ((emailError.textContent !== "") && ( passwordErrorMsg.textContent !== "")){
                alert("* Email and Password invalid")
            }else if (emailError.textContent !== ""){
                alert("* Email invalid")
            }else if ( passwordErrorMsg.textContent !== ""){
                alert("* Password invalid")
            }
        }
    }else{
        alert("* Complete the fields to enter")
    }
});



