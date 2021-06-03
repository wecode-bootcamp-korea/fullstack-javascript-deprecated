const idInput = document.querySelector("#js-id-input");
const pwInput = document.querySelector("#js-pw-input");
const btnLogin = document.querySelector(".btn-login");

const toggleBtnLogin = () => {
  const idLength = idInput.value.length;
  const pwLength = pwInput.value.length;

  idLength > 0 && pwLength > 0
    ? (btnLogin.disabled = false)
    : (btnLogin.disabled = true);
};

const changeIdInputBorder = () => {
  idInput.value.includes("@")
    ? idInput.classList.add("active")
    : idInput.classList.remove("active");
};

const changePwInputBorder = () => {
  pwInput.value.length >= 8
    ? pwInput.classList.add("active")
    : pwInput.classList.remove("active");
}

const handleInput = () => {
  changeIdInputBorder();
  changePwInputBorder();
  toggleBtnLogin();
};

const loginInit = () => {
  idInput.addEventListener("input", handleInput);
  pwInput.addEventListener("input", handleInput);
};

loginInit();
