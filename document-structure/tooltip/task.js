const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.querySelector('.tooltip');

function appearancetToltip(e){
    e.preventDefault();
    let clickTooltip = e.target;
    let atributesTooltip = clickTooltip.getAttribute('title');
    tooltip.classList.add('tooltip_active');
    tooltip.textContent = atributesTooltip 
    clickTooltip.appendChild(tooltip)
}

hasTooltip.forEach(item => {
    item.addEventListener('click',appearancetToltip);
})

