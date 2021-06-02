const likeBtns = document.querySelectorAll(".js-like-btn");

const toggleLikeBtns = (event) => {
  const { target } = event;
  target.classList.toggle("fas");
}

const init = () => {
  likeBtns.forEach(likebtn =>
    likebtn.addEventListener("click", toggleLikeBtns)
  )
}

init();