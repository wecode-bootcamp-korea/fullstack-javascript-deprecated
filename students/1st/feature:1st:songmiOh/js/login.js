const info = document.getElementById('login_id');
const info = document.getElementById('login_pw');

documnet.addEventListener('keyup', function(e) {
    if (info.value !== "") {
        if(pass.value !== "") {
            let color = documnet.addEventListener('login_bt');
            color.style.backgroundColor = rgb(0, 103, 163);
        }
    }
});