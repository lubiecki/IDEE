const errorUsername = 'Username max length is 100 characters.';
const errorPassword = 'Password must be made up of 7 to 25 characters.';

const loginForm = document.getElementById('login');
const loginError = document.getElementById('login__error')


if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (event.target.username.value.length > 100) {
            loginError.innerHTML = errorUsername;
            loginError.className = 'visible';
        } else if (event.target.password.value.length < 7 || event.target.password.value.length > 25) {
            loginError.innerHTML = errorPassword;
            loginError.className = 'visible';
        } else {
            loginForm.submit();
        }
    });
}