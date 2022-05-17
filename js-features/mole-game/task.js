const countDead = document.getElementById('dead');
const counLos = document.getElementById('lost');

function getHole(index) {
	return document.getElementById(`hole${index}`);
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
            alert('Вы победили!')
        }
        if(counLos.textContent == 5){
            alert('Вы проиграли!')
        }
    }
}

