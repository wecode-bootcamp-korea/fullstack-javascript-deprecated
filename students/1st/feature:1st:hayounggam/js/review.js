const form = document.querySelector(".review-form"),
  idInput = document.querySelector(".js-review-id-input"),
  commentInput = document.querySelector(".js-review-comment-input"),
  reviewList = document.querySelector(".beverage-review-list"),
  noReview = document.querySelector(".no-review-message");

const printReview = (id, comment) => {
  if (noReview) {
    noReview.remove();
  }

  const liTag = document.createElement("li");
  const aTag = document.createElement("a");
  const pTag = document.createElement("p");
  reviewList.appendChild(liTag);
  liTag.appendChild(aTag);
  liTag.appendChild(pTag);
  liTag.className = "beverage-review-comment";
  aTag.className = "reviewer-id";
  pTag.className = "reviewer-comment-content";
  aTag.innerHTML = id;
  pTag.innerText = comment;
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