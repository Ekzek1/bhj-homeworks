const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
	let menuLink = menuLinks[i];

	let menuItem = menuLink.closest('.menu__item');

	const subMenu = menuItem.querySelector('.menu_sub');
	console.log(subMenu);

	menuLink.onclick = function() {
		if(subMenu) {
			subMenu.classList.toggle('menu_active');
            return false;
		}
        
	}
}
