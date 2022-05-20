const countDead = document.getElementById('dead');
const counLos = document.getElementById('lost');

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

function gameOver(mess){
    alert(mess);
    countDead.textContent = 0
    counLos.textContent = 0
}
for (let i = 1; i < 9; i++) {
    let hole = getHole(i)

    hole.onclick = function() {
        if(hole.className.includes( 'hole_has-mole' )){
        countDead.textContent ++
        }else{
        counLos.textContent++
        }
            
        if(countDead.textContent == 10){
            gameOver('Вы победили!')
        }
        if(counLos.textContent == 5){
            gameOver('Вы проиграли!');
        }
    }
}

