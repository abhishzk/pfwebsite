export function reveal(node: HTMLElement, delay = 0) {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduceMotion || !('IntersectionObserver' in window)) {
		node.classList.add('is-visible');
		return {};
	}

	node.classList.add('reveal-pending');
	node.style.transitionDelay = `${delay}ms`;
	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			node.classList.add('is-visible');
			node.classList.remove('reveal-pending');
			observer.disconnect();
		},
		{ threshold: 0.16 }
	);

	observer.observe(node);

	return {
		destroy() {
			node.classList.remove('reveal-pending');
			observer.disconnect();
		}
	};
}
