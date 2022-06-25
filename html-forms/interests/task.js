const interset = Array.from(document.querySelectorAll('.interest'));
const intersetCheck= document.querySelectorAll('.interest__check');

function chekd (e){
    let active = e.target.closest('.interest');

    if(active.closest('.interests_active')){
        return
    }
    const child = active.querySelector('ul');
    const change = Array.from(child.querySelectorAll('input'))
    change.forEach(item =>{
        if(!item.checked){
            item.checked = true
        }else{
            item.checked = false
        }
    })
}
intersetCheck.forEach(item => {
    item.addEventListener('change', chekd)
});


