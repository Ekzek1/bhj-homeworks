const fontSize = Array.from(document.querySelectorAll('.font-size'));
const bookList = document.querySelector('.book');

document.querySelector('.book__control').addEventListener('click', function(event){
    event.preventDefault();
    let fontSizeClick = event.target.closest('.font-size');
    let fontSizeActive = fontSize.findIndex(item => item.classList.contains('font-size_active'));
    let bookFontSize = fontSizeClick.classList[1];
    let bookFontSizeActive = bookList.classList[1];

    fontSize[fontSizeActive].classList.remove('font-size_active');
    fontSizeClick.classList.add('font-size_active');
    
    if(bookFontSizeActive){
        bookList.classList.remove(bookFontSizeActive)
    }
    if(bookFontSize){
        bookList.classList.add(bookFontSize);
    }
})