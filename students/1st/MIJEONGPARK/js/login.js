const inputID = document.getElementsByClassName('loginID')[0]
const inputPW = document.getElementsByClassName('loginPW')[0]
const loginBtn = document.getElementsByClassName('btn')[0]

const activeBtn = document.getElementsByClassName('active')[0]


function handleInput() {
  if (inputID.value.length > 0 && inputPW.value.length > 0) {
    loginBtn.classList.add('active'); 
  } else {
    loginBtn.classList.remove('active');
  }
}


inputID.addEventListener('input', handleInput);
inputPW.addEventListener('input', handleInput);