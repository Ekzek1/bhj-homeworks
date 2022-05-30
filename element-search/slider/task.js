const sliderItem = document.querySelectorAll('.slider__item');
const sliderArray = Array.from(sliderItem)
const sliderDots = document.querySelectorAll('.slider__dot');
let count = 0;
function showSlide (n){
    for(let i = 0;i < sliderArray.length; i++){
        if(sliderArray[i].classList.contains('slider__item_active')){
            sliderArray[i].classList.remove('slider__item_active');
            sliderDots[i].classList.remove('slider__dot_active');
            sliderArray[n].classList.add('slider__item_active');
            sliderDots[n].classList.add('slider__dot_active');
        }
   }
   count = n
}
//повесил событие на dot, еще не смог разобраться как определить по какому элементу был сделан click
document.querySelector('.slider__arrow_next').addEventListener('click', function(){
    count += 1
    if(count >= sliderItem.length){
        count = 0
        sliderArray[0].classList.add('slider__item_active');
    }
    showSlide(count)
})
document.querySelector('.slider__arrow_prev').addEventListener('click', function(){
    count -= 1
    if(count === -1){
        count = 4
        sliderArray[4].classList.add('slider__item_active');
    }
    showSlide(count)
})
