const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const botMesages = ['как сам?','вы очень грубы!','мой хозяин не очень умный','kek'];

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();


const messageTime = Array.from(document.querySelectorAll('.message__time'));
messageTime.forEach(item => item.textContent = `${hours} : ${minutes}`);


chatWidget.addEventListener('click', (e) => {
    chatWidget.classList.add('chat-widget_active');
});

chatInput.addEventListener('blur', (e) => {
    chatWidget.classList.remove('chat-widget_active');
});

//не доконца пока понимаю как правльно таймер настроить 
// function timeOut(bull) {

//     setTimeout(() => {
//         messages.innerHTML += `
//         <div class="message">
//                 <div class="message__time">${hours}:${minutes}</</div>
//                 <div class="message__text">что-то еще?</div>
//         </div>
//         `;
//     },3000)
// }

function randomMessages(){
    let idx = Math.floor(botMesages.length * Math.random());
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">${botMesages[idx]}</div>
        </div>
    `;
}


function deliveryMessage(e){
    let message = chatInput.value
    if(e.key === 'Enter'){
        messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${hours}:${minutes}</div>
                    <div class="message__text">${message}</div>
                </div>
            `;
        chatInput.value = '';
        randomMessages()
        // timeOut ()
    }
}

document.addEventListener('keydown',deliveryMessage);
