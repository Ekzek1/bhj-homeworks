const sliderItem = document.querySelectorAll('.slider__item');
const sliderArray = Array.from(sliderItem)
const sliderDots = document.querySelectorAll('.slider__dot');


let activeSlide = sliderArray.findIndex(item => item.classList.contains('slider__item_active'))
// console.log(activeSlide)
function showSlide (n){
    sliderArray[activeSlide].classList.remove('slider__item_active');
    sliderArray[n].classList.add('slider__item_active');
    activeSlide = n 
}
//повесил событие на dot, еще не смог разобраться как определить по какому элементу был сделан click
document.querySelector('.slider__arrow_next').addEventListener('click', function(){
    let count = activeSlide + 1
    count = count >= sliderItem.length ? 0 : count;
    console.log(count)
    showSlide(count)
})
document.querySelector('.slider__arrow_prev').addEventListener('click', function(){
    let count = activeSlide - 1
    count = count < 0 ? sliderItem.length - 1 : count
    console.log(count)
    showSlide(count)
})
