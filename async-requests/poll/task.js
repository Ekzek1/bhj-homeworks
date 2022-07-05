
let pollAnswers = document.getElementById('poll__answers');
let pollTitle = document.querySelector('.poll__title')
const modal = document.querySelector('.modal');

function setButton (e){
    let pollButton = Array.from(document.getElementsByClassName('poll__answer'));
    if(e.target.classList.contains('poll__answer')){
        modal.classList.add('modal__active');
        document.querySelector('.modal__button').addEventListener('click', function(){
            modal.classList.remove('modal__active');
        })

        pollButton.forEach(item =>{item.remove()})
    
        function pollxhr(){
            let pollXhr = new XMLHttpRequest();
            pollXhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
            pollXhr.responseType = 'json';
            pollXhr.send();

            pollXhr.addEventListener('load', () =>{
                let responseObj = pollXhr.response;
                let responseId = responseObj.id
                if(pollAnswers.dataset.id == responseId){
                    console.log('f')
                    return pollxhr()
                }
  
                pollAnswers.dataset.id = responseObj.id
                
                let responseAnswers = responseObj.data.answers;
                pollTitle.textContent = responseObj.data.title;
                for (let answer of responseAnswers) {
                    pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${answer}</button>`);
                }
            })
        }
        pollxhr()
    }
}

pollAnswers.addEventListener('click', setButton)
