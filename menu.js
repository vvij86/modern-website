document.addEventListener('DOMContentLoaded', () => {
  // Apply tooltips only for top-level menu items
  document.querySelectorAll('nav.index-nav .main-menu > li > a').forEach(a => {
    const text = a.textContent.trim();
    a.setAttribute('data-tooltip', text);
    a.setAttribute('title', text);
  });

  document.querySelectorAll('li.has-submenu > a').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const parent = anchor.parentElement;
      const isOpen = parent.classList.contains('open');

      // close any other open submenu
      document.querySelectorAll('li.has-submenu.open').forEach(item => {
        if (item !== parent) {
          item.classList.remove('open');
        }
      });

      if (!isOpen) {
        event.preventDefault();
        parent.classList.add('open');
      } else {
        parent.classList.remove('open');
      }
    });
  });

  const nav = document.querySelector('nav.index-nav');
  if (nav) {
    // Always start collapsed; no toggle
    nav.classList.add('collapsed');
    document.body.classList.add('collapsed-nav');
  }

  // Close any open submenu when clicking outside the navigation
  document.addEventListener('click', event => {
    if (!event.target.closest('nav.index-nav')) {
      document.querySelectorAll('li.has-submenu.open').forEach(item => {
        item.classList.remove('open');
      });
    }
  });
});
