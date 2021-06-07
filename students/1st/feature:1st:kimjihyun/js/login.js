const pressId = document.querySelector('#loginID');
const pressPW = document.querySelector('#loginPW');
const button = document.querySelector('.bucksBtn');

// 아이디와 패스워드의 입력 값 체크 함수
function loginLengthCheck () {
    const idLength = pressId.value.length;
    const pwLength = pressPW.value.length;

    button.disabled = !(idLength && pwLength);
}

// 아이디와 패스워드의 특수 문자 및 입력 값의 길이 체크 함수
function inputIdCheck () {
    if (pressId.value.includes('@')) {
        pressId.classList.add('active');
    } else {
        pressId.classList.remove('active');
    }
    loginLengthCheck();
}

function inputPWCheck () {
    const MIN_PASSWORD_LENGTH = 8;
    if (pressPW.value.length >= MIN_PASSWORD_LENGTH) {
        pressPW.classList.add('active');
    } else {
        pressPW.classList.remove('active');
    }
    loginLengthCheck();
}

pressId.addEventListener('input', inputIdCheck);
pressPW.addEventListener('input', inputPWCheck);
