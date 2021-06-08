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

// 엔터 시 input 내의 텍스트가 등록되는 기능
inputReview.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = reviewContainer.value;

    addReviewSpace.textContent = inputText;
});

// 엔터 시 input 내의 아이디가 등록되는 기능
inputID.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputID = reviewIDContainer.value;

    addIDSpace.textContent = inputID;
});





