const tasksList = document.querySelector('.tasks__list');
const taskInput = document.querySelector('.tasks__input')
const button = document.querySelector('.tasks__add');


button.addEventListener('click', e => {
    e.preventDefault()
    let value = taskInput.value.trim();
    if(value){
        tasksList.insertAdjacentHTML('afterend', `<div class="task"><div class="task__title">${value}</div><a href="#" class="task__remove">&times;</a></div>`);
        
        const taskRemove = document.querySelector('.task__remove');
        taskRemove.addEventListener('click', function(e){
            e.preventDefault();
            taskRemoveParent = taskRemove.parentElement;
            taskRemoveParent.remove();
        })
        taskInput.value = ''
    } 
})
