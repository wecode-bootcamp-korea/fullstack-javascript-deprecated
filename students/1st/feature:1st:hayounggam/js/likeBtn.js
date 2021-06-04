const toggleLikeBtns = (event) => {
  event.target.classList.toggle("fas");
}

const likeBtnInit = () => {
  const likeBtns = document.querySelectorAll(".js-like-btn");
  likeBtns.forEach(likeBtn =>
    likeBtn.addEventListener("click", toggleLikeBtns)
  )
}

likeBtnInit();