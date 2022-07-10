const modalActive = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

function getCookie(name){
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return  cookie ? cookie.substring(name.length + 1) : undefined
}

window.onload = function(){
    if(getCookie('modal') == 'undefined'){
        return
    }
    if(getCookie('modal') == 'close'){
        modalActive.classList.remove('modal_active');
    }
}

modalClose.addEventListener('click', (e) => {
    modalActive.classList.remove('modal_active');
    document.cookie = "modal=close; expires=Tue, 19 Jan 2038 03:14:07 GMT";
});