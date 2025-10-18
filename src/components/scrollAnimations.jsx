// animations/scrollAnimations.js
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          // If animation should only happen once, unobserve after triggering
          if (entry.target.dataset.animateOnce !== 'false') {
            observer.unobserve(entry.target);
          }
        } else if (entry.target.dataset.animateOnce === 'false') {
          // If animation should trigger multiple times, remove class when not visible
          entry.target.classList.remove('animate-visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// Initialize on DOM content loaded
export const initOnLoad = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
};