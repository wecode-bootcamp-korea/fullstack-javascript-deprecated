// 하트 아이콘 클릭 시 빨간색으로 바뀌도록 구현
const togglingBtns = document.querySelectorAll('.fa-heart'); 

togglingBtns.forEach(function(btns){ 
    btns.addEventListener ("click", function(){ 
        btns.classList.toggle('fas')
    });
})
