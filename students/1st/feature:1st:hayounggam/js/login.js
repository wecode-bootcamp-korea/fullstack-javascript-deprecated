const idInput = document.querySelector("#js-id-input");
const pwInput = document.querySelector("#js-pw-input");
const btnLogin = document.querySelector(".btn-login");

const toggleBtnLogin = () => {
  const idLength = idInput.value.length;
  const pwLength = pwInput.value.length;

  btnLogin.disabled = !(idLength && pwLength);
};

const handleIdInput = () => {
  idInput.value.includes("@")
    ? idInput.classList.add("active")
    : idInput.classList.remove("active");
  toggleBtnLogin();
}

const handlePwInput = () => {
  const PASSWORD_MIN_LENGTH = 8;
  pwInput.value.length >= PASSWORD_MIN_LENGTH
    ? pwInput.classList.add("active")
    : pwInput.classList.remove("active");
  toggleBtnLogin();
}

const loginInit = () => {
  idInput.addEventListener("input", handleIdInput);
  pwInput.addEventListener("input", handlePwInput);
};

loginInit();
