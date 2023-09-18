const uname = document.getElementById("uname");
const email = document.getElementById("email");
const pass = document.getElementById("password");
var flag = 1; //true
function validateForm() {
  //name validation
  if (uname.value == "") {
    document.getElementById(
      "uerr"
    ).innerHTML = `User Name Is Empty<i class="fa-regular fa-circle-xmark"></i>`;
    flag = 0; //false
  } else if (uname.value.length < 3) {
    document.getElementById(
      "uerr"
    ).innerHTML = `Minimum 3 Charater Requires <i class="fa-regular fa-circle-xmark"></i>`;
    flag = 0; //false
  } else {
    document.getElementById("uerr").innerHTML = ``;
    flag = 1;
  }
  //email validation
  if (email.value == "") {
    document.getElementById(
      "eerr"
    ).innerHTML = `User Email Is Empty <i class="fa-regular fa-circle-xmark"></i>`;
    flag = 0; //false
  } else if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    document.getElementById("eerr").innerHTML = ``;
    flag = 1;
  } else {
    document.getElementById(
      "eerr"
    ).innerHTML = `User Email Is Invalid <i class="fa-regular fa-circle-xmark"></i>`;
    flag = 0;
  }
  //password validation
  if (pass.value == "") {
    document.getElementById(
      "perr"
    ).innerHTML = `User Password Is Empty <i class="fa-regular fa-circle-xmark"></i>`;
    flag = 0;
  } else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.match(
      pass.value.length
    )
  ) {
    document.getElementById("perr").innerHTML = `ff`;
    flag = 1;
  } else {
    document.getElementById(
      "perr"
    ).innerHTML = ` 8-15 characters with lowercase, uppercase, number, special symbol; <i class="fa-regular fa-circle-xmark"></i>`;
    flag = 0;
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}
function clr1() {
  document.getElementById("uerr").innerHTML = ``;
}
function clr2() {
  document.getElementById("eerr").innerHTML = ``;
}
function clr3() {
  document.getElementById("perr").innerHTML = ``;
}
