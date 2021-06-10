import ScrollReveal from 'scrollreveal';

export default function initialize() {
	const doc = document.documentElement;
	doc.classList.remove('no-js');
	doc.classList.add('js');
}

export function setupHeaderBg() {
	const doc = document.documentElement;
	const win = window;
	const headerBg = document.querySelector('.site-header-large-bg span');

	function setHeaderBgHeight() {
		const bodyHeight = doc.getElementsByTagName('body')[0].clientHeight;
		headerBg.style.height = `${bodyHeight}px`;
	}

	setHeaderBgHeight();
	win.addEventListener('load', setHeaderBgHeight);
	win.addEventListener('resize', setHeaderBgHeight);
}

