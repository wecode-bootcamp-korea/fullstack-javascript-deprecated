const pressId = document.getElementsByClassName('bucks_id')[0];
const pressPW = document.getElementsByClassName('bucks_password')[0];
const button = document.querySelector(".bucks_btn"); 

// 1자 이상의 텍스트 입력 시 나타나는 이벤트 구현
function pressTheKey () {
    let keyUpID = pressId.value;
    let keyUpPw = pressPW.value;

    if (keyUpID.length >= 1 && keyUpPw.length >= 1) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1a75ff";
    } 
    else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#99c2ff";
    }
}; 

pressId.addEventListener('keyup', pressTheKey);
pressPW.addEventListener('keyup', pressTheKey);


// border color를 바꾸는 함수 - ID
function textCheck () {
    let keyUpID2 = pressId.value;
    let theInputID = document.querySelector('.bucks_id');
    console.log(keyUpID2);
    // let includeTheKey = keyUpID2.includes('@');

    if (keyUpID2.includes('@')) {
        theInputID.style.borderColor = "green";
    } else {
        return;
    };
}

pressId.addEventListener('keyup', textCheck);

// border color를 바꾸는 함수 - PW
function textLengthCheck () {
    let keyUpPW2 = pressPW.value;
    let theInputPW = document.querySelector('.bucks_password');

    if (keyUpPW2.length >= 8) {
        theInputPW.style.borderColor = "green";
    } else {
        return;
    };
}

pressPW.addEventListener('keyup', textLengthCheck);


// 초록색으로 변했던 보더가 다시 기본 값으로 돌아오게 하는 함수
function changeTheColor () {
    let keyUpID3 = pressId.value;
    let keyUpPW3 = pressPW.value;
    let theInputID2 = document.querySelector('.bucks_id');
    let theInputPW2 = document.querySelector('.bucks_password');

    if (!keyUpID3.includes('@') && keyUpPW3.length < 8) {
        theInputID2.style.borderColor = "rgba(219, 219, 219, 1)";
        theInputPW2.style.borderColor = "rgba(219, 219, 219, 1)";
    } 
    else {
        return;
    }
}

pressId.addEventListener('keyup', changeTheColor);
pressPW.addEventListener('keyup', changeTheColor);







 // 중복이 많은 코드

// const myKey = pressId.addEventListener('keyup', function(el) {
//     let keyUpID = pressId.value;
//     let keyUpPw = pressPW.value;
    
//     if (keyUpID.length >= 1 && keyUpPw.length >= 1) {
//         button.disabled = false;
//         button.style.cursor = "pointer";
//         button.style.backgroundColor = "#1a75ff";
//     } 
//     else {
//         button.disabled = true;
//         button.style.cursor = "default";
//         button.style.backgroundColor = "#99c2ff";
//     }
// });

// const myKey2 = pressPW.addEventListener('keyup', function(el) {
//     let keyUpID = pressId.value;
//     let keyUpPw = pressPW.value;
    
//     if (keyUpID.length >= 1 && keyUpPw.length >= 1) {
//         button.disabled = false;
//         button.style.cursor = "pointer";
//         button.style.backgroundColor = "#1a75ff";
//     } 
//     else {
//         button.disabled = true;
//         button.style.cursor = "default";
//         button.style.backgroundColor = "#99c2ff";
//     }
// });

// function 하나로 만들기. 

