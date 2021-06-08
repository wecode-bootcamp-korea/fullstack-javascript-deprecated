const inputId = document.getElementsByClassName('putId')[0]
const inputPw = document.getElementsByClassName('putPw')[0]
const loginButton = document.getElementsByClassName('loginBtn')[0]
const input = document.getElementsByClassName('puts')[0]

function handleInput() {
    if (inputId.value.length > 0 && inputPw.value.length > 0) {
        loginButton.classList.add("active")
    } else {
        loginButton.classList.remove("active")
    }
}

function handlePuts() {
    if (inputId.value.includes("@") === true || inputPw.value.length > 7) {
        inputId.classList.add("interact")
        inputPw.classList.add("interact")
    } else {
        inputId.classList.remove("interact")
        inputPw.classList.remove("interact")
    }
}

inputId.addEventListener("input", handleInput)
inputPw.addEventListener("input", handleInput)
input.addEventListener("input", handlePuts)