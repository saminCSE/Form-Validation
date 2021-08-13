$(document).ready(function () {
  $("#fnameError").hide();
  $("#lnameError").hide();
  $("#unameError").hide();
  $("#emailError").hide();
  $("#numError").hide();
  $("#passError").hide();
  $("#cpassError").hide();
  $("#urlError").hide();

  // errors are all false rn (error nahi hai abhi)
  let error_fname = false;
  let error_lname = false;
  let error_uname = false;
  let error_email = false;
  let error_number = false;
  let error_pass = false;
  let error_cpass = false;
  let error_url = false;

  $("#fname").focusout(function () {
    check_fname();
  });
  $("#lname").focusout(function () {
    check_lname();
  });
  $("#uname").focusout(function () {
    check_uname();
  });
  $("#email").focusout(function () {
    check_email();
  });
  $("#num").focusout(function () {
    check_num();
  });
  $("#password").focusout(function () {
    check_pass();
  });
  $("#cpassword").focusout(function () {
    check_cpass();
  });
  $("#url").focusout(function () {
    check_url();
  });

  function check_fname() {
    // let regex = /^[a-zA-Z]*$/;
    let regex = /^[a-zA-Z]{3,10}$/;
    let regex2 = /^[a-zA-Z]{1,2}$/;
    let fnameValue = $("#fname").val();
    if (regex.test(fnameValue) && fnameValue !== "") {
      $("#fnameError").hide();
      $("#fname").css("border-bottom", "2px solid #34F458");
    } else if (regex2.test(fnameValue) && fnameValue !== "") {
      $("#fnameError").html("First Name should between 3 and 10 characters");
      $("#fnameError").show();
      $("#fname").css("border-bottom", "2px solid #F90A0A");
    } else if (fnameValue == "") {
      $("#fnameError").html("Name can't be empty");
      $("#fnameError").show();
      $("#fname").css("border-bottom", "2px solid #F90A0A");
      error_fname = true;
    } else {
      $("#fnameError").html("Name should contain only characters");
      $("#fnameError").show();
      $("#fname").css("border-bottom", "2px solid #F90A0A");
      error_fname = true;
    }
  }

  function check_lname() {
    // let regex = /^[a-zA-Z]*$/;
    let regex = /^[a-zA-Z]{3,10}$/;
    let regex2 = /^[a-zA-Z]{1,2}$/;
    let lnameValue = $("#lname").val();
    if (regex.test(lnameValue) && lnameValue !== "") {
      $("#lnameError").hide();
      $("#lname").css("border-bottom", "2px solid #34F458");
    } else if (regex2.test(lnameValue) && lnameValue !== "") {
      $("#lnameError").html("Last Name should between 3 and 10 characters");
      $("#lnameError").show();
      $("#lname").css("border-bottom", "2px solid #F90A0A");
      error_lname = true;
    } else if (lnameValue == "") {
      $("#lnameError").html("Name can't be empty");
      $("#lnameError").show();
      $("#lname").css("border-bottom", "2px solid #F90A0A");
      error_lname = true;
    } else {
      $("#lnameError").html("Name should contain only characters");
      $("#lnameError").show();
      $("#lname").css("border-bottom", "2px solid #F90A0A");
      error_lname = true;
    }
  }

  function check_uname() {
    // let regex = /^[a-zA-Z]*$/;
    let regex = /^[a-zA-Z0-9]{3,10}$/;
    let regex2 = /^[a-zA-Z0-9]{1,2}$/;
    let unameValue = $("#uname").val();
    if (regex.test(unameValue) && unameValue !== "") {
      $("#unameError").hide();
      $("#uname").css("border-bottom", "2px solid #34F458");
    } else if (regex2.test(unameValue) && unameValue !== "") {
      $("#unameError").html("User Name should between 3 and 10 characters");
      $("#unameError").show();
      $("#uname").css("border-bottom", "2px solid #F90A0A");
      error_uname = true;
    } else if (unameValue == "") {
      $("#unameError").html("User Name can't be empty");
      $("#unameError").show();
      $("#uname").css("border-bottom", "2px solid #F90A0A");
      error_uname = true;
    } else {
      $("#unameError").html("Name should contain only characters");
      $("#unameError").show();
      $("#uname").css("border-bottom", "2px solid #F90A0A");
      error_uname = true;
    }
  }

  function check_email() {
    let regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let emailValue = $("#email").val();
    if (regex.test(emailValue) && emailValue !== "") {
      $("#emailError").hide();
      $("#email").css("border-bottom", "2px solid #34F458");
    } else {
      $("#emailError").html("Invalid Email");
      $("#emailError").show();
      $("#email").css("border-bottom", "2px solid #F90A0A");
      error_email = true;
    }
  }

  function check_num() {
    let regex = /^(\+88)?0-?\d{1}-?\d{9}$/;
    let numValue = $("#num").val();
    if (numValue !== "" && regex.test(numValue)) {
      $("#numError").hide();
      $("#num").css("border-bottom", "2px solid #34F458");
    } else {
      $("#numError").html("Enter a valid phone number only");
      $("#numError").show();
      $("#num").css("border-bottom", "2px solid #F90A0A");
      error_number = true;
    }
  }

  function check_pass() {
    let regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    let regex_up = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    let regex_lo = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.*[a-zA-Z]).{8,}$/;
    let regex_dg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.*[a-zA-Z]).{8,}$/;
    let regex_sp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let passwordValue = $("#password").val();
    let password_length = $("#password").val().length;
    if (regex.test(passwordValue) && passwordValue !== "") {
      $("#passError").hide();
      $("#password").css("border-bottom", "2px solid #34F458");
    } else if (regex_up.test(passwordValue) && passwordValue !== "") {
      $("#passError").html("password should contain one uppercase letter");
      $("#passError").show();
      $("#password").css("border-bottom", "2px solid #F90A0A");
      error_pass = true;
    } else if (regex_lo.test(passwordValue) && passwordValue !== "") {
      $("#passError").html("password should contain one lowercase letter");
      $("#passError").show();
      $("#password").css("border-bottom", "2px solid #F90A0A");
      error_pass = true;
    } else if (regex_dg.test(passwordValue) && passwordValue !== "") {
      $("#passError").html("password should contain one digit");
      $("#passError").show();
      $("#password").css("border-bottom", "2px solid #F90A0A");
      error_pass = true;
    } else if (regex_sp.test(passwordValue) && passwordValue !== "") {
      $("#passError").html("password should contain one special character");
      $("#passError").show();
      $("#password").css("border-bottom", "2px solid #F90A0A");
      error_pass = true;
    } else {
      $("#passError").html(
        "Please enter valid password and 8 or more characters"
      );
      $("#passError").show();
      $("#password").css("border-bottom", "2px solid #F90A0A");
      error_pass = true;
    }
  }

  function check_cpass() {
    let cpassValue = $("#cpassword").val();
    let passValue = $("#password").val();
    if (cpassValue !== passValue) {
      $("#cpassError").html("Passwords Did not Matched");
      $("#cpassError").show();
      $("#cpassword").css("border-bottom", "2px solid #F90A0A");
      error_cpass = true;
    } else if (cpassValue == "") {
      $("#cpassError").html("This field is mandatory");
      $("#cpassError").show();
      $("#cpassword").css("border-bottom", "2px solid #F90A0A");
      error_cpass = true;
    } else {
      $("#cpassError").hide();
      $("#cpassword").css("border-bottom", "2px solid #34F458");
    }
  }

  function check_url() {
    // let regex = /^[a-zA-Z]*$/;
    let regex =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    let urlValue = $("#url").val();
    if (regex.test(urlValue) && urlValue !== "") {
      $("#urlError").hide();
      $("#url").css("border-bottom", "2px solid #34F458");
    } else {
      $("#urlError").html("Enter a valid url");
      $("#urlError").show();
      $("#url").css("border-bottom", "2px solid #F90A0A");
      error_url = true;
    }
  }

  $("#form").submit(function () {
    error_fname = false;
    error_lname = false;
    error_uname = false;
    error_email = false;
    error_number = false;
    error_pass = false;
    error_cpass = false;
    error_url = false;

    check_fname();
    check_lname();
    check_uname();
    check_email();
    check_num();
    check_pass();
    check_cpass();
    check_url();

    if (
      error_fname == false &&
      error_lname == false &&
      error_uname == false &&
      error_email == false &&
      error_pass == false &&
      error_cpass == false &&
      error_url == false &&
      error_number == false
    ) {
      alert("Registration Successfull");
      return true;
    } else {
      alert("Please Fill the form Correctly");
      return false;
    }
  });
});
