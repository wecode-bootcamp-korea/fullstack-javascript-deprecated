const inputId = document.getElementsByClassName("input_ID")[0]
const inputPw = document.getElementsByClassName("input_PW")[0]
const loginBtn = document.getElementsByClassName("login_btn")[0]

function handleInput() {
  if (inputId.value.length > 0 && inputPw.value.length > 0) {
    loginBtn.style.backgroundColor = "#0088CC";
  }else {
    loginBtn.style.backgroundColor = "#b37867";
  }
}

inputId.addEventListener("input", handleInput)
inputPw.addEventListener("input", handleInput)


function pw() {
  if(inputPw.length < 8 || inputPw.length > 16) {
    window.alert('비밀번호는 8글자 이상, 16글자 이하만 이용 가능합니다.');
    document.getElementsByClassName("input_PW").value='';
    console.log("aaa");
  }
}

inputPw.addEventListener("input", pw)