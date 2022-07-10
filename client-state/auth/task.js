const form = document.getElementById('signin__form');
const formButton = document.querySelector('.btn');
const welcome = document.querySelector('.welcome');
const failAuth = document.querySelector('.fail')
const userId = document.querySelector('#user_id');
const buttonDeauthorization = document.querySelector('.deauthorization');


function setWelcome (id){
    let signin = form.closest('.signin_active');

    if(signin){
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.textContent = id;
    }
}

window.onload = function(){
    let auth = localStorage.userId;
    if(auth){
        return setWelcome(auth)
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let xhrAuth = new XMLHttpRequest();

    xhrAuth.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhrAuth.responseType = 'json';
    const formData = new FormData(form);

    xhrAuth.send(formData);
    xhrAuth.onload = function(){
        let responseAuth = xhrAuth.response.success
        let responseId = xhrAuth.response.user_id;

        if(!responseAuth){
            failAuth.classList.add('fail__active');
            form.elements.login.value = '';
            form.elements.password.value = '';
            return
        }

        if(responseAuth){
            localStorage.userId = responseId;
            form.elements.login.value = '';
            form.elements.password.value = '';
            return setWelcome(responseId)
        }
    }
})

buttonDeauthorization.addEventListener('click', (e) =>{
    e.preventDefault();
    let signinActive = document.querySelector('.signin')
    signinActive.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
})