const cookie = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');
const cookieSpeed = document.getElementById("clicker_speed");
cookie.onclick = function(){
    cookie.width = ++count.textContent % 2 ? 250 : 200;
}

