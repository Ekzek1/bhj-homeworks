const timer = document.getElementById('timer')

let timerId = setInterval(function() {
    --timer.textContent
	if(timer.textContent == 0) {
		clearInterval(timerId);
		alert('Вы победили в конкурсе!');
	}
}, 1000);
