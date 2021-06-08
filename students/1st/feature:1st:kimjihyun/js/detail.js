// 하트 아이콘 클릭 시 빨간색으로 변하는 기능
const togglingBtns = document.querySelector('.fa-heart'); 

togglingBtns.addEventListener('click', function(){
    togglingBtns.classList.toggle('fas');
});

const reviewContainer = document.querySelector('#reviewText');
const reviewIDContainer = document.querySelector('#reviewId');
const inputReview = document.querySelector('.reviewForm');
const inputID = document.querySelector('.reviewIDForm');
const addReviewSpace = document.querySelector('.textAddContainer');
const addIDSpace = document.querySelector('.textAddID');
const noreviewText = document.querySelector('.textAddID');

// 엔터 시 input 내의 텍스트가 등록되는 기능
function makeIDInput (el) {
    el.preventDefault();
    const inputText = reviewContainer.value;
    if (!inputText) {
        alert('리뷰를 입력해주세요!');
    }
}
inputID.addEventListener('submit', makeIDInput);

function makereviewInput (el) {
    el.preventDefault();
    const inputText = reviewContainer.value;
    const inputTextID = reviewIDContainer.value;
    addIDSpace.textContent = inputTextID;
    addReviewSpace.textContent = inputText;
    if (inputText) {
        noreviewText.classList.add('active');
    }
}

inputReview.addEventListener('submit', makereviewInput);


