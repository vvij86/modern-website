document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav.index-nav .main-menu li > a').forEach(a => {
    const text = a.textContent.trim();
    a.setAttribute('data-tooltip', text);
    a.setAttribute('title', text);
  });
  document.querySelectorAll('li.has-submenu > a').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const parent = anchor.parentElement;
      const isOpen = parent.classList.contains('open');
      if (!isOpen) {
        event.preventDefault();
      }
      parent.classList.toggle('open');
    });
  });

  const toggleBtn = document.getElementById('toggle-nav');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.querySelector('nav.index-nav').classList.toggle('collapsed');
      document.body.classList.toggle('collapsed-nav');
    });
  }
});
