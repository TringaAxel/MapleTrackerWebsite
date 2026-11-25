(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("is-pending");
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    document.querySelectorAll(".reveal").forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      element.classList.add("is-pending");
      observer.observe(element);
    });
  }

  if (window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".tile").forEach(tile => {
      tile.addEventListener("pointermove", event => {
        const box = tile.getBoundingClientRect();
        tile.style.setProperty("--mx", `${event.clientX - box.left}px`);
        tile.style.setProperty("--my", `${event.clientY - box.top}px`);
      });
    });
  }
})();
