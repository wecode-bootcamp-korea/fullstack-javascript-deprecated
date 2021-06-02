const idInput = document.querySelector("#js-id-input"),
  pwInput = document.querySelector("#js-pw-input"),
  btnLogin = document.querySelector(".btn-login");

const GREEN_COLOR = "#00704a";
const GREY_COLOR = "#dddddd";

const toggleBtnLogin = () => {
  const idLength = idInput.value.length;
  const pwLength = pwInput.value.length;

  idLength > 0 && pwLength > 0
    ? (btnLogin.disabled = false)
    : (btnLogin.disabled = true);
};

const changeIdInputBorder = () => {
  if (idInput.value.includes("@")) {
    idInput.style.borderColor = GREEN_COLOR;
  } else {
    idInput.style.borderColor = GREY_COLOR;
  }
};

const changePwInputBorder = () => {
  if (pwInput.value.length >= 8) {
    pwInput.style.borderColor = GREEN_COLOR;
  } else {
    pwInput.style.borderColor = GREY_COLOR;
  }
}

const handleInput = () => {
  changeIdInputBorder();
  changePwInputBorder();
  toggleBtnLogin();
};

const init = () => {
  idInput.addEventListener("keyup", handleInput);
  pwInput.addEventListener("keyup", handleInput);
};

init();
