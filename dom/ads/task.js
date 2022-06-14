const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

function rotatorTimer(){
    let rotatorCaseActive = rotatorCase.findIndex(item => item.classList.contains('rotator__case_active'));
    let speed = rotatorCase[rotatorCaseActive].dataset.speed;
    let color = rotatorCase[rotatorCaseActive].dataset.color;
    rotatorCase[rotatorCaseActive].style.color = color
    setTimeout(() =>{
        rotatorCase[rotatorCaseActive].classList.remove('rotator__case_active');
            if(rotatorCaseActive < rotatorCase.length){
                rotatorCaseActive++;
                rotatorCaseActive = rotatorCaseActive >= rotatorCase.length ? rotatorCaseActive = 0 : rotatorCaseActive;
                rotatorCase[rotatorCaseActive].classList.add('rotator__case_active');
            }
        return rotatorTimer()
    } ,speed)
}

document.addEventListener("DOMContentLoaded",rotatorTimer);