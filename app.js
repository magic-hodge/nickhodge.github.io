// Function to determine if the nav bar is in view.

function scrollToTop() {

	const homeIcon = document.getElementById('homeIcon');
	const scrollTop = document.getElementById('scrollTop');
	let bounds = homeIcon.getBoundingClientRect();

	if (bounds.top >= 0 &&
		bounds.left >= 0 &&
		bounds.right <= (document.documentElement.clientWidth) &&
		bounds.bottom <= (document.documentElement.clientHeight)) {
			scrollTop.className = 'scrollTop';
	}
	else {
		scrollTop.className = 'scrollTop showTop';
	}
}

scrollTop.addEventListener('click', function scrollTo(event) {
	event.preventDefault();
	let homeIcon = document.getElementById('homeIcon');
	homeIcon.scrollIntoView({behavior: 'smooth'});
});

setInterval(function(){scrollToTop();}, 100);

// ScrollTo Function. Function that scrolls to selected project link smoothly on click.

function scrollTo() {

	// Declares variables for the array to loop.
	
	const link1 = document.getElementById('link1');
	const link2 = document.getElementById('link2');
	const link3 = document.getElementById('link3');
	const link4 = document.getElementById('link4');
	const link5 = document.getElementById('link5');
	const link6 = document.getElementById('link6');

	const projectLinks = [link1, link2, link3, link4, link5, link6];

	// Adds event listeners for each link in projectLinks.
	
	projectLinks.forEach(link => link.addEventListener('click', function scrollTo(event) {
		event.preventDefault();
		let target = document.getElementById(link.textContent.toLowerCase().replace(/\s/g, '_'));
		target.scrollIntoView({behavior: 'smooth'});
	}));
}

scrollTo();

// Function to complete the sliding nav w/ links that fade in. Declares variables,
// toggles active states for nav and links. . . Yup.

const navSlide = () => {
	const arrow = document.querySelector('.arrow');
	const projectLinks = document.querySelector('.projectLinks');
	const projectListLinks = document.querySelectorAll('.projectLinks li');
	
	arrow.addEventListener('click', () => {

		// Toggles the Nav.
		projectLinks.classList.toggle('projectLinksActive');

		// Animates Links.
		projectListLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			}
			else {
				link.style.animation = `projectLinksFade 0.5s ease forwards ${index / 5 + 0.25}s`;
			}
		});

		// Arrow animation.
		
		arrow.classList.toggle('arrowSwitch');

	});

}

navSlide();