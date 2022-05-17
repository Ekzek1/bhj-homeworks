const cookie = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');
const cookieSpeed = document.getElementById("clicker_speed");
cookie.onclick = function(){
    count.textContent ++;
    if ( count.textContent % 2 === 0 ){
        cookie.width = 185
    } else{
        cookie.width = 215
    }
}

