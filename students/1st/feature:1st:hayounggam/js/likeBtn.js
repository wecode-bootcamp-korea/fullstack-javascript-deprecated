const likeBtns = document.querySelectorAll(".js-like-btn");

const toggleLikeBtns = (event) => {
  event.target.classList.toggle("fas");
}

const likeBtnInit = () => {
  likeBtns.forEach(likebtn =>
    likebtn.addEventListener("click", toggleLikeBtns)
  )
}

likeBtnInit();