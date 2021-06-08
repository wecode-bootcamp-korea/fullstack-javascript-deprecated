const inputId = document.getElementsByClassName('inputId')[0];
const inputPw = document.getElementsByClassName('inputPw')[0];
const loginBtn = document.getElementsByClassName('loginBtn')[0];

function handleLoginBotton (){
  if(inputId.value.length > 0 && inputPw.value.length > 0){
    loginBtn.classList.add("active");
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.remove("active");
    loginBtn.disabled = true;
  }
}

inputId.addEventListener('input', handleLoginBotton);
inputPw.addEventListener('input', handleLoginBotton);