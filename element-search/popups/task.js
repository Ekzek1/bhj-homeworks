const modalMain = document.getElementById('modal_main');
const modalClose = document.querySelectorAll('.modal__close_times');
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');

showSuccess.onclick = function(){
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function(){
        let modal = this.closest('.modal');
        modal.classList.remove('modal_active')
    }
}
