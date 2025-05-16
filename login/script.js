// First password field
const svgContainer = document.querySelector('.password-svgs');
const passwordClsSvg = svgContainer.querySelector('.password-close-svg');
const passwordOpenSvg = svgContainer.querySelector('.password-open-svg');
const passwordInput = document.getElementById('password');

// Confirm password field
const svgContainer1 = document.querySelector('.password-svgs1');
const passwordClsSvg1 = svgContainer1.querySelector('.password-close-svg1');
const passwordOpenSvg1 = svgContainer1.querySelector('.password-open-svg1');
const passwordInput1 = document.getElementById('password1');

// Toggle password visibility (first)
passwordClsSvg.addEventListener('click', () => {
	passwordClsSvg.style.display = 'none';
	passwordOpenSvg.style.display = 'block';
	passwordInput.type = 'text';
});

passwordOpenSvg.addEventListener('click', () => {
	passwordOpenSvg.style.display = 'none';
	passwordClsSvg.style.display = 'block';
	passwordInput.type = 'password';
});

// Toggle confirm password visibility
passwordClsSvg1.addEventListener('click', () => {
	passwordClsSvg1.style.display = 'none';
	passwordOpenSvg1.style.display = 'block';
	passwordInput1.type = 'text';
});

passwordOpenSvg1.addEventListener('click', () => {
	passwordOpenSvg1.style.display = 'none';
	passwordClsSvg1.style.display = 'block';
	passwordInput1.type = 'password';
});

// Ripple effect for first password SVGs
const svgGroup = svgContainer.querySelectorAll('svg');
svgGroup.forEach(svg => {
	svg.addEventListener('click', function () {
		svgContainer.classList.add('active');
		setTimeout(() => {
			svgContainer.classList.remove('active');
		}, 500);
	});
});

// Ripple effect for confirm password SVGs
const svgGroup1 = svgContainer1.getElementsByClassName('svg1');
Array.from(svgGroup1).forEach(svg1 => {
	svg1.addEventListener('click', function () {
		svgContainer1.classList.add('active');
		setTimeout(() => {
			svgContainer1.classList.remove('active');
		}, 500);
	});
});

// Header scroll effect
window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	header.classList.toggle('scrolled', window.scrollY > 0);
});

// Footer year
document.getElementById('datee').textContent = new Date().getFullYear();
