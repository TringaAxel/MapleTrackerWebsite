// Cash App-style nav behavior: scroll state, burger menu, scroll-reveal.
(function () {
    // Gates the .reveal styles: without this class content stays fully visible.
    document.documentElement.classList.add('js');

    var nav = document.querySelector('.site-nav');
    var burger = document.querySelector('.nav-burger');
    var overlay = document.querySelector('.menu-overlay');

    function onScroll() {
        nav.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function setMenu(open) {
        document.body.classList.toggle('menu-open', open);
        burger.setAttribute('aria-expanded', String(open));
    }
    burger.addEventListener('click', function () {
        setMenu(!document.body.classList.contains('menu-open'));
    });
    overlay.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = link.getAttribute('href') || '';
            setMenu(false);
            // Same-page anchor: body was overflow:hidden when the click landed,
            // which cancels the native smooth scroll — retrigger it next frame.
            if (href.charAt(0) === '#') {
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    requestAnimationFrame(function () {
                        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
                        history.pushState(null, '', href);
                    });
                }
            }
        });
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setMenu(false);
    });

    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach(function (el) { io.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('visible'); });
    }
})();
