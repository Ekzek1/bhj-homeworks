const sliderItem = document.querySelectorAll('.slider__item');
const sliderArray = Array.from(sliderItem)
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

let activeSlide = sliderArray.findIndex(item => item.classList.contains('slider__item_active'));

//Slider
function showSlide (n){
    sliderArray[activeSlide].classList.remove('slider__item_active');
    sliderDots[activeSlide].classList.remove('slider__dot_active')
    sliderArray[n].classList.add('slider__item_active');
    sliderDots[n].classList.add('slider__dot_active');
    activeSlide = n;
}

document.querySelector('.slider__arrow_next').addEventListener('click', function(){
    let count = activeSlide + 1;
    count = count >= sliderItem.length ? 0 : count;
    showSlide(count)
})
document.querySelector('.slider__arrow_prev').addEventListener('click', function(){
    let count = activeSlide - 1;
    count = count < 0 ? sliderItem.length - 1 : count;
    showSlide(count)
})

// dots
function DotsActive(event){
    let itemIndex = event.target;
    itemIndex = sliderDots.findIndex(item => item === itemIndex);
    showSlide(itemIndex)
}

sliderDots.forEach(item => {
    item.addEventListener('click',DotsActive )
});