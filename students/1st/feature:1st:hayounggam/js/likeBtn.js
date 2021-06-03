const likeBtns = document.querySelectorAll(".js-like-btn");

const toggleLikeBtns = (event) => {
  event.target.classList.toggle("fas");
}

const likeBtnInit = () => {
  likeBtns.forEach(likeBtn =>
    likeBtn.addEventListener("click", toggleLikeBtns)
  )
}

likeBtnInit();