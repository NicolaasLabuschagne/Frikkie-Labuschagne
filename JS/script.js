document.addEventListener('DOMContentLoaded', () => {
    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinksMobile = document.getElementById('nav-links-mobile');
    if (navToggle && navLinksMobile) {
        navToggle.addEventListener('click', () => {
            navLinksMobile.classList.toggle('hidden');
            navLinksMobile.classList.toggle('flex');
        });
        navLinksMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksMobile.classList.add('hidden');
                navLinksMobile.classList.remove('flex');
            });
        });
    }

    // Scroll progress bar + nav shadow
    const progressBar = document.getElementById('scroll-progress-bar');
    const nav = document.getElementById('site-nav');
    const onScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (progressBar) progressBar.style.width = pct + '%';
        if (nav) nav.classList.toggle('scrolled', scrollTop > 20);
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Reveal timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    if ('IntersectionObserver' in window && timelineItems.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        timelineItems.forEach(item => observer.observe(item));
    } else {
        timelineItems.forEach(item => item.classList.add('in-view'));
    }
});
