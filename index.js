
  // Dark / default theme toggle
  const themeToggle = document.getElementById('themeToggle');

  function setTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'default');

    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        isDark ? 'Switch to default theme' : 'Switch to dark theme'
      );
      themeToggle.setAttribute(
        'title',
        isDark ? 'Switch to default theme' : 'Switch to dark theme'
      );
    }
  }

  // Restore the user's previous choice.
  setTheme(localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'default');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const nextTheme = document.body.classList.contains('dark-theme')
        ? 'default'
        : 'dark';
      setTheme(nextTheme);
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
    const expanded = menuToggle.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', expanded);
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Active link highlight on scroll
  const sections = document.querySelectorAll('main section, #home');
  const navA = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navA.forEach(a => a.classList.remove('active'));
        const active = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(sec => observer.observe(sec));

  // Back to top button
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 500);
  });

  // Contact form (front-end only demo)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = "Thanks, " + document.getElementById('name').value.split(' ')[0] + "! Your message has been noted.";
    form.reset();
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

