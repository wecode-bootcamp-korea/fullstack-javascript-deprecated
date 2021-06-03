const pressId = document.getElementsByClassName('ID')[0];
const pressPW = document.getElementsByClassName('PW')[0];
const button = document.querySelector('.bucksBtn');

// Id, Pw의 각각의 조건 만족 시 나타나는 이벤트 구현
function pressKeyMoreThanOne () {
    let bucksIDValue = pressId.value;
    let bucksPWValue = pressPW.value;
    let theInputID = document.querySelector('.ID');
    let theInputPW = document.querySelector('.PW');

    if (bucksIDValue.length >= 1 && bucksIDValue.includes('@')) {
        button.disabled = false;
        button.style.cursor = 'pointer';
        button.style.backgroundColor = "#99c2ff";
        theInputID.style.borderColor = "green";
    }

    if (bucksIDValue.length >= 1 && bucksIDValue.includes('@') && 
       (bucksPWValue.length >= 8)) {
        button.disabled = false;
        button.style.cursor = 'pointer';
        button.style.backgroundColor = '#0095F6';
        theInputPW.style.borderColor = "green";
       }
    else {
        return;
    }
};

pressId.addEventListener('input', pressKeyMoreThanOne);
pressPW.addEventListener('input', pressKeyMoreThanOne);


// 초록색으로 변했던 보더가 다시 기본 값으로 돌아오게 하는 함수
function returnTheBorderColor () {
    let bucksIDValue = pressId.value;
    let bucksPWValue = pressPW.value;
    let theInputID = document.querySelector('.ID');
    let theInputPW = document.querySelector('.PW');

    if (!bucksIDValue.includes('@') && bucksPWValue.length < 8) {
        theInputID.style.borderColor = "rgba(219, 219, 219, 1)";
        theInputPW.style.borderColor = "rgba(219, 219, 219, 1)";
    } 
    else {
        return;
    }
}

pressId.addEventListener('keyup', returnTheBorderColor);
pressPW.addEventListener('keyup', returnTheBorderColor);