let xhr = new XMLHttpRequest();
const item = document.querySelector('#items');
const loader = document.querySelector('.loader');

xhr.open("GET",'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('load', (e) => {
    let json = JSON.parse(xhr.responseText)
    let valute = json.response.Valute
    loader.classList.remove('loader_active');
    for (let key in valute) {
        let CharCode = valute[key].CharCode
        let Value = valute[key].Value
        console.log(Value)
        item.insertAdjacentHTML('beforeEnd',` 
                            <div class="item">
                                <div class="item__code">${CharCode}</div>
                                <div class="item__value">${Value}</div>
                                <div class="item__currency">руб.</div>
                            </div>`
                            )
    }
})
