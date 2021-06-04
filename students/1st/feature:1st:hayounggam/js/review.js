const form = document.querySelector(".review-form");
const idInput = document.querySelector(".js-review-id-input");
const commentInput = document.querySelector(".js-review-comment-input");
const reviewList = document.querySelector(".beverage-review-list");
const noReview = document.querySelector(".no-review-message");

const removeReview = (event) => {
  event.target.parentNode.remove();

  if (!reviewList.children.length) {
    reviewList.appendChild(noReview);
  }
}

const printReview = (id, comment) => {
  if (noReview) {
    noReview.remove();
  }

  const liTag = document.createElement("li");
  const aTag = document.createElement("a");
  const pTag = document.createElement("p");
  const removeBtn = document.createElement("button");
  const iTag = document.createElement("i");
  reviewList.appendChild(liTag);
  liTag.appendChild(aTag);
  liTag.appendChild(pTag);
  liTag.appendChild(iTag);
  liTag.appendChild(removeBtn);
  liTag.className = "beverage-review-comment";
  aTag.className = "reviewer-id";
  pTag.className = "reviewer-comment-content";
  iTag.classList.add("js-like-btn", "far", "fa-heart");
  removeBtn.className = "btn-remove-comment";
  aTag.innerHTML = id;
  pTag.innerText = comment;
  removeBtn.innerText = "❌";

  removeBtn.addEventListener("click", removeReview);
  likeBtnInit();
}

const getInputValue = (event) => {
  event.preventDefault();
  let idValue = idInput.value;
  let commentValue = commentInput.value;

  if (!idValue) {
    alert("ID를 입력해주세요🙂");
  } else if (!commentValue) {
    alert("리뷰를 입력해주세요🙂");
  } else if (idValue && commentValue) {
    printReview(idValue, commentValue);
    form.reset();
  } else {
    return;
  }
}

const reviewInit = () => {
  form.addEventListener("submit", getInputValue);
}

reviewInit();