const loginId = document.getElementsByClassName('loginId')[0];
const loginPw = document.getElementsByClassName('loginPw')[0];
const loginBt = document.getElementsByClassName("loginBt")[0];

function changeButton() {
  if(loginId.value.length > 0 && loginPw.value.length > 0) {
    loginBt.style.backgroundColor = "rgb(0, 0, 250)";
    loginBt.disabled = false;
  } else {  
    loginBt.style.backgroundColor = "rgb(135, 206, 250)";
    loginBt.disabled = true;
  }
}

loginId.addEventListener("input", changeButton);
loginPw.addEventListener("input", changeButton);