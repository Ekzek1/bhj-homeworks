const editor = document.querySelector('#editor');
const editorClear = document.querySelector('.clear');

if(localStorage.editor){
    editor.value = localStorage.editor
}
editor.addEventListener('keyup', () => {
    localStorage.editor = editor.value;
})
editorClear.addEventListener('click', (e) => {
    editor.value = ''
    localStorage.editor = editor.value;
})