const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem  = Array.from(document.querySelectorAll('.dropdown__item'));

function dropMenu(){
    dropdownList.classList.toggle('dropdown__list_active');
}

dropdownValue.addEventListener('click', dropMenu);

function changeValueText (e){
    e.preventDefault();
    let target = e.target;
    dropdownValue.textContent = target.textContent
    dropMenu()
}

dropdownItem.forEach(item =>{
    item.addEventListener('click',changeValueText)
})


// const dropdownValues = document.querySelectorAll('.dropdown__value');

// dropdownValues.forEach((item) =>{
//     item.addEventListener('click', (event) =>{
//         const parent = event.target.closest('.dropdown');
//         const list = parent.querySelector('.dropdown__list');
//         list.classList.toggle('dropdown__list_active');
//     })
// })