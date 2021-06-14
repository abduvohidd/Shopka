
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('menu');
});






const btnMenu = document.querySelectorAll('.btn-menu');
const btnMen = document.querySelectorAll('.btn-men');

btnMenu.forEach((btns) => {
	btns.addEventListener('click', () => {
		btnMenu.forEach((btns) => {
			btns.classList.remove('selected');
		});
		btns.classList.add('selected');
	});
});

btnMen.forEach((btns) => {
	btns.addEventListener('click', () => {
		btnMen.forEach((btns) => {
			btns.classList.remove('selected');
		});
		btns.classList.add('selected');
	});
});








document.querySelectorAll(".accordion-header").forEach(header=> {
header.addEventListener('click', () => {
    header.parentElement.classList.toggle('change');
	console.log(header);
});

});





