const tab = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

document.querySelector('.tabs').addEventListener('click', function(event){
    let tabActive = tab.findIndex(item => item.classList.contains('tab_active'));
    let tabContentActive = tabContent.findIndex(item => item.classList.contains('tab__content_active'));
    let getTabActive  = event.target.closest('.tab');
    let getTabContentActive = tab.findIndex(item => item === getTabActive);

    if(getTabActive){
        tab[tabActive].classList.remove('tab_active');
        tabContent[tabContentActive].classList.remove('tab__content_active');
        getTabActive.classList.add("tab_active");
        tabContent[getTabContentActive].classList.add('tab__content_active')
    }

})