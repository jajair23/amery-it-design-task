(() => {
  const onReady = () => {
    const body = document.body;

    // --------------------------------------------------
    // Mobile navigation
    // --------------------------------------------------
    const menuButton = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-nav-panel');

    if (menuButton && mobileMenu) {
      const closeMenu = () => {
        menuButton.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
      };

      menuButton.addEventListener('click', () => {
        const opening = !mobileMenu.classList.contains('is-open');
        menuButton.classList.toggle('is-open', opening);
        mobileMenu.classList.toggle('is-open', opening);
        menuButton.setAttribute('aria-expanded', String(opening));
        menuButton.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
      });

      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 1020) closeMenu();
      });
    }

    // --------------------------------------------------
    // FAQ accordion
    // --------------------------------------------------
    const faqItems = [...document.querySelectorAll('[data-faq-item]')];

    const closeFaq = item => {
      const button = item.querySelector('.faq-question');
      const panel = item.querySelector('.faq-panel');
      if (!button || !panel) return;

      item.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');

      const startHeight = panel.scrollHeight;
      panel.style.height = `${startHeight}px`;

      requestAnimationFrame(() => {
        panel.style.height = '0px';
        panel.style.opacity = '0';
      });
    };

    const openFaq = item => {
      const button = item.querySelector('.faq-question');
      const panel = item.querySelector('.faq-panel');
      if (!button || !panel) return;

      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');

      panel.style.height = '0px';
      panel.style.opacity = '0';

      const target = panel.scrollHeight;

      requestAnimationFrame(() => {
        panel.style.height = `${target}px`;
        panel.style.opacity = '1';
      });

      const done = event => {
        if (event.propertyName !== 'height') return;
        if (item.classList.contains('is-open')) {
          panel.style.height = 'auto';
        }
        panel.removeEventListener('transitionend', done);
      };

      panel.addEventListener('transitionend', done);
    };

    faqItems.forEach(item => {
      const button = item.querySelector('.faq-question');
      const panel = item.querySelector('.faq-panel');
      if (!button || !panel) return;

      panel.style.height = '0px';
      panel.style.opacity = '0';

      button.addEventListener('click', () => {
        const opening = !item.classList.contains('is-open');

        faqItems.forEach(other => {
          if (other !== item && other.classList.contains('is-open')) {
            closeFaq(other);
          }
        });

        if (opening) openFaq(item);
        else closeFaq(item);
      });
    });

    // --------------------------------------------------
    // Reveal motion — only enable AFTER setup succeeds.
    // This is the fail-safe that prevents blank pages.
    // --------------------------------------------------
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealTargets = [...document.querySelectorAll('[data-reveal]')];
    const staggerGroups = [...document.querySelectorAll('[data-stagger]')];

    staggerGroups.forEach(group => {
      [...group.querySelectorAll('[data-reveal-item]')].forEach((item, index) => {
        item.style.setProperty('--delay', `${index * 70}ms`);
      });
    });

    body.classList.add('motion-ready');
    body.classList.add('is-ready');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach(el => el.classList.add('is-visible'));
      staggerGroups.forEach(el => el.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');

          const stagger = entry.target.querySelector('[data-stagger]');
          if (stagger) stagger.classList.add('is-visible');

          obs.unobserve(entry.target);
        });
      }, {
        threshold: 0.10,
        rootMargin: '0px 0px -6% 0px'
      });

      revealTargets.forEach(el => observer.observe(el));

      // Fail-safe: if an observer/browser quirk occurs, never leave
      // content hidden indefinitely.
      window.setTimeout(() => {
        revealTargets.forEach(el => el.classList.add('is-visible'));
        staggerGroups.forEach(el => el.classList.add('is-visible'));
      }, 1800);
    }

    // --------------------------------------------------
    // Existing compact testimonial sequence
    // --------------------------------------------------
    const quotes = [...document.querySelectorAll('[data-quote]')];
    const progress = [...document.querySelectorAll('.testimonial-progress span')];

    if (quotes.length) {
      let current = 0;
      let timer = null;

      const show = index => {
        if (index === current) return;

        const old = quotes[current];
        old.classList.remove('is-active');
        old.classList.add('is-leaving');

        window.setTimeout(() => old.classList.remove('is-leaving'), 650);

        progress[current]?.classList.remove('is-active');
        current = index;
        quotes[current].classList.add('is-active');
        progress[current]?.classList.add('is-active');
      };

      const next = () => show((current + 1) % quotes.length);

      if (!reduceMotion) {
        timer = window.setInterval(next, 4800);

        const stage = document.querySelector('.testimonials-v10__stage, .testimonials-v11__stage');
        stage?.addEventListener('mouseenter', () => window.clearInterval(timer));
        stage?.addEventListener('mouseleave', () => {
          window.clearInterval(timer);
          timer = window.setInterval(next, 4800);
        });
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady, { once: true });
  } else {
    onReady();
  }
})();